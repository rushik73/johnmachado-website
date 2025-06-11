// src/app.d.ts
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
	  // interface Error {}
	  // interface Locals {}
	  // interface PageData {}
	  // interface PageState {}
	  // interface Platform {}
	}
  }
  
  // ─── CUSTOM MODULE DECLARATIONS ────────────────────────────────────────────────
  
  // allow importing .png/.jpg/.svg/etc. as URLs
  declare module '*.png';
  declare module '*.jpg';
  declare module '*.svg';
  declare module '*.gif';
  
  // if you’re using svelte-hamburger (or any other untyped package)
  declare module 'svelte-hamburger';
  
  export {};
  