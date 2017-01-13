import axios from 'axios';

export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_GAME = 'FETCH_GAME';

const API_KEY = '38BF26EB398A971BF02BCBA8376EC168';

const ROOT_URL = 'http://localhost:8082';
const STEAM_URL = '';

export function fetchGames() {
  const request = axios.get(`${ROOT_URL}/games`);

  return {
    type: FETCH_GAMES,
    payload: request
  };
}

export function fetchGame(id) {
  const request = axios.get(`${ROOT_URL}/games/${id}`);

  return {
    type: FETCH_GAME,
    payload: request
  };
}
