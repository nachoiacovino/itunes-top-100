import albumsReducer, { initialState } from './albumsReducer';
import { ADD_ALBUM_TO_FAVORITES, GET_ALBUMS_SUCCESS, REMOVE_ALBUM_FROM_FAVORITES } from './albumsTypes';

fdescribe('albumsReducer', () => {
  const mockPayload = [
    {
      id: { attributes: { 'im:id': 23 } },
      'im:name': { label: 'Test album' },
      'im:artist': { label: 'Artist 1' },
    },
    {
      id: { attributes: { 'im:id': 67 } },
      'im:name': { label: 'Second album' },
      'im:artist': { label: 'Another artist' },
    },
  ];

  it('should return the initial state', () => {
    expect(albumsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_ALBUMS_SUCCESS', () => {
    expect(
      albumsReducer(initialState, {
        type: GET_ALBUMS_SUCCESS,
        payload: mockPayload,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      albums: [
        {
          id: { attributes: { 'im:id': 23 } },
          'im:name': { label: 'Test album' },
          'im:artist': { label: 'Artist 1' },
          rank: 1,
          favorite: false,
        },
        {
          id: { attributes: { 'im:id': 67 } },
          'im:name': { label: 'Second album' },
          'im:artist': { label: 'Another artist' },
          rank: 2,
          favorite: false,
        },
      ],
      error: null,
    });
  });

  it('should handle ADD_ALBUM_TO_FAVORITES', () => {
    const initialStateAlbums = {
      ...initialState,
      albums: [
        {
          id: { attributes: { 'im:id': 23 } },
          'im:name': { label: 'Test album' },
          'im:artist': { label: 'Artist 1' },
          rank: 1,
          favorite: false,
        },
        {
          id: { attributes: { 'im:id': 67 } },
          'im:name': { label: 'Second album' },
          'im:artist': { label: 'Another artist' },
          rank: 2,
          favorite: true,
        },
      ],
      favorites: [67],
    };

    expect(
      albumsReducer(initialStateAlbums, {
        type: ADD_ALBUM_TO_FAVORITES,
        payload: 23,
      }),
    ).toEqual({
      ...initialStateAlbums,
      albums: [
        {
          id: { attributes: { 'im:id': 23 } },
          'im:name': { label: 'Test album' },
          'im:artist': { label: 'Artist 1' },
          rank: 1,
          favorite: true,
        },
        {
          id: { attributes: { 'im:id': 67 } },
          'im:name': { label: 'Second album' },
          'im:artist': { label: 'Another artist' },
          rank: 2,
          favorite: true,
        },
      ],
      favorites: [67, 23],
    });
  });

  it('should handle REMOVE_ALBUM_FROM_FAVORITES', () => {
    const initialStateAlbums = {
      ...initialState,
      albums: [
        {
          id: { attributes: { 'im:id': 23 } },
          'im:name': { label: 'Test album' },
          'im:artist': { label: 'Artist 1' },
          rank: 1,
          favorite: false,
        },
        {
          id: { attributes: { 'im:id': 67 } },
          'im:name': { label: 'Second album' },
          'im:artist': { label: 'Another artist' },
          rank: 2,
          favorite: true,
        },
      ],
      favorites: [67],
    };

    console.log(initialStateAlbums);

    expect(
      albumsReducer(initialStateAlbums, {
        type: REMOVE_ALBUM_FROM_FAVORITES,
        payload: 67,
      }),
    ).toEqual({
      ...initialStateAlbums,
      albums: [
        {
          id: { attributes: { 'im:id': 23 } },
          'im:name': { label: 'Test album' },
          'im:artist': { label: 'Artist 1' },
          rank: 1,
          favorite: false,
        },
        {
          id: { attributes: { 'im:id': 67 } },
          'im:name': { label: 'Second album' },
          'im:artist': { label: 'Another artist' },
          rank: 2,
          favorite: false,
        },
      ],
      favorites: [],
    });
  });
});
