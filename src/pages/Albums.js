import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Album from '../components/Album';
import { getAlbumsStart } from '../redux/albums/albumsActions';

const Albums = () => {
  const dispatch = useDispatch();
  const albums = useSelector(({ albums }) => albums.albums);

  useEffect(() => {
    dispatch(getAlbumsStart());
  }, [dispatch]);

  return (
    <Container>
      <h1>Albums</h1>
      {albums.map((album, idx) => (
        <Album key={album.id.attributes['im:id']} album={album} idx={idx} />
      ))}
    </Container>
  );
};

export default Albums;
