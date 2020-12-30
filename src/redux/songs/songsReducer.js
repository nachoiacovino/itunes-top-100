import { GET_SONGS_SUCCESS } from './songsTypes';

const initialState = {
  songs: [],
  selectedSong: null,
  loading: true,
  error: null,
};

const songs = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SONGS_SUCCESS:
      return {
        ...state,
        songs: payload,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default songs;
