import type { Actions } from './$types';
import { Resend } from 'resend';
import { fail } from '@sveltejs/kit';
import { RESEND_API, CONTACT_FROM, CONTACT_TO } from '$env/static/private';

const resend = new Resend(RESEND_API);
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (m) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;' }[m]!));

export const actions: Actions = {
  default: async ({request}) => {
    const fd = await request.formData();
    const name = String(fd.get('name') ?? '').trim();
    const phone = String(fd.get('phone') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();
    const honeypot = String(fd.get('company') ?? '');

    console.log('CONTACT submit:', { name, phone, email, hasMessage: !!message, honeypot });

    if (!name || !email || !phone) {
      return fail(400, { error: 'Name, Email, and Phone are required.' });
    }

    const html = `
      <div>
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
      </div>
    `.trim();

    try {
      const { data, error } = await resend.emails.send({
        from: `Website <${CONTACT_FROM}>`, // dev: onboarding@resend.dev
        to: [CONTACT_TO],                  // set to YOUR RESEND ACCOUNT EMAIL for this test
        replyTo: email,
        subject: 'New John Machado Jiu-Jitsu Academy form submission',
        html,
        text: `Name: ${name}\nPhone: ${phone || '—'}\nEmail: ${email}\n\n${message}\n`
      });

      console.log('Resend result:', { id: data?.id, error });
      if (error) return fail(500, { error: error.message ?? 'Resend error' });

      return { sent: true, id: data?.id };
    } catch (e: any) {
      console.error('Resend threw:', e);
      return fail(500, { error: e?.message ?? 'Could not send email right now.' });
    }
  }
};
