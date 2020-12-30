import { Button, Media } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { addAlbumToFavorites, removeAlbumFromFavorites } from '../redux/albums/albumsActions';

const Album = ({ album }) => {
  const dispatch = useDispatch();
  const handleFavorite = (action) => {
    const albumId = album.id.attributes['im:id'];

    if (action === 'ADD') dispatch(addAlbumToFavorites(albumId));
    else if (action === 'REMOVE') dispatch(removeAlbumFromFavorites(albumId));
  };

  return (
    <>
      <hr />
      <Media className='mb-1'>
        <div className='w-60 d-flex justify-content-center'>
          <h5 className='p-3'>{album.rank}.</h5>
        </div>
        <img
          src={album['im:image'][0].label}
          width={64}
          height={64}
          className='mr-3'
          alt='Generic placeholder'
        />
        <Media.Body>
          <h5 className=''>{album['im:name'].label}</h5>
          <p className='mb-0'>{album['im:artist'].label}</p>
          {album.favorite ? (
            <Button onClick={() => handleFavorite('REMOVE')}>
              <AiFillStar />
            </Button>
          ) : (
            <Button onClick={() => handleFavorite('ADD')}>
              <AiOutlineStar />
            </Button>
          )}
        </Media.Body>
      </Media>
    </>
  );
};

export default Album;
