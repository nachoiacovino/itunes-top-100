import { ADD_ALBUM_TO_FAVORITES, GET_ALBUMS_START, REMOVE_ALBUM_FROM_FAVORITES } from './albumsTypes';

export const getAlbumsStart = () => ({
  type: GET_ALBUMS_START,
});

export const addAlbumToFavorites = (payload) => ({
  type: ADD_ALBUM_TO_FAVORITES,
  payload,
});

export const removeAlbumFromFavorites = (payload) => ({
  type: REMOVE_ALBUM_FROM_FAVORITES,
  payload,
});
