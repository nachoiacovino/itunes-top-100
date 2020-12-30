import { ADD_ALBUM_TO_FAVORITES, GET_ALBUMS_SUCCESS, REMOVE_ALBUM_FROM_FAVORITES } from './albumsTypes';

const initialState = {
  albums: [],
  favorites: ['asassa', 'asad82'],
  loading: true,
  error: null,
};

const albums = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: payload.map((album, idx) => ({ ...album, rank: idx + 1 })),
        error: false,
        loading: false,
      };
    case ADD_ALBUM_TO_FAVORITES:
      console.log(state.favorites);
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case REMOVE_ALBUM_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((albumId) => albumId !== payload),
      };
    default:
      return state;
  }
};

export default albums;
