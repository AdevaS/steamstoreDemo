import axios from 'axios';

export const FETCH_GAMES = 'FETCH_GAMES';

const API_KEY = '38BF26EB398A971BF02BCBA8376EC168';

const ROOT_URL = 'https://api.steampowered.com/ISteamApps/GetAppList/v2';

export function fetchGames() {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_GAMES,
    payload: request
  };
}
