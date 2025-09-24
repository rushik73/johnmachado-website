import { TMDB_READ_TOKEN } from "$env/static/private";
import type { PageServerLoad } from "../contact/$types";
const API = "https://api.themoviedb.org/3";
const ID = 94660;
const IMG_BASE = "https://image.tmdb.org/t/p/w1280";

export const load = (async ({ fetch }) => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_READ_TOKEN}`
    }
  };

  // Movie credits to get unique poster paths
  const creditsURL = `${API}/person/${ID}/movie_credits?language=en-US`;
  const credits = await (await fetch(creditsURL, options)).json();

  const movies = [...credits.cast];
  const postersPath = Array.from(new Set(movies.map((m)=>m.poster_path).filter(Boolean)))

  return {postersPath: postersPath.map((p) => `${IMG_BASE}${p}`)};
})satisfies PageServerLoad;

  // fetchPosters().then(urls => {
  //   console.log("Poster URLs:", urls);
  // });
