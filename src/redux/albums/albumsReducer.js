import { GET_ALBUMS_SUCCESS } from './albumsTypes';

const initialState = {
  albums: [],
  loading: true,
  error: null,
};

const albums = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: payload,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default albums;
