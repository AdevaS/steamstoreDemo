import { FETCH_GAMES } from '../actions/index';

const INITIAL_STATE = { all: [], game: null };

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_GAMES:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
