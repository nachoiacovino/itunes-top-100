import { ADD_ALBUM_TO_FAVORITES, GET_ALBUMS_FAIL, GET_ALBUMS_SUCCESS, REMOVE_ALBUM_FROM_FAVORITES } from './albumsTypes';

const initialState = {
  albums: [],
  favorites: [],
  loading: true,
  error: null,
};

const albums = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: payload.map((album, idx) => ({
          ...album,
          rank: idx + 1,
          favorite: state.favorites.includes(album.id.attributes['im:id']),
        })),
        error: false,
        loading: false,
      };
    case GET_ALBUMS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ADD_ALBUM_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, payload],
        albums: state.albums.map((album) =>
          payload === album.id.attributes['im:id']
            ? { ...album, favorite: true }
            : album,
        ),
      };
    case REMOVE_ALBUM_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((albumId) => albumId !== payload),
        albums: state.albums.map((album) =>
          payload === album.id.attributes['im:id']
            ? { ...album, favorite: false }
            : album,
        ),
      };
    default:
      return state;
  }
};

export default albums;
