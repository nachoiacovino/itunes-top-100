import { addAlbumToFavorites, getAlbumsStart, removeAlbumFromFavorites } from './albumsActions';
import { ADD_ALBUM_TO_FAVORITES, GET_ALBUMS_START, REMOVE_ALBUM_FROM_FAVORITES } from './albumsTypes';

describe('albumActions', () => {
  it('should create an action to get albums', () => {
    const expectedAction = { type: GET_ALBUMS_START };
    expect(getAlbumsStart()).toEqual(expectedAction);
  });

  it('should create an action to add album to favorites', () => {
    const expectedAction = { type: ADD_ALBUM_TO_FAVORITES };
    expect(addAlbumToFavorites()).toEqual(expectedAction);
  });

  it('should create an action to remove album to favorites', () => {
    const expectedAction = { type: REMOVE_ALBUM_FROM_FAVORITES };
    expect(removeAlbumFromFavorites()).toEqual(expectedAction);
  });
});
