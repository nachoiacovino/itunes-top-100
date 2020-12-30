import { useEffect } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Error from '../components/Error';
import Loading from '../components/Loading';
import { getAlbumsStart } from '../redux/albums/albumsActions';
import NotFound from './NotFound';

const AlbumDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const album = useSelector(({ albums }) =>
    albums.albums.find((album) => album.id.attributes['im:id'] === params.id),
  );
  const loading = useSelector(({ albums }) => albums.loading);
  const error = useSelector(({ albums }) => albums.error);

  useEffect(() => {
    dispatch(getAlbumsStart());
  }, [dispatch]);

  const formatDate = (date) =>
    new Intl.DateTimeFormat('en-GB').format(new Date(date));

  if (error) return <Error>{error.message}</Error>;
  if (loading) return <Loading />;
  if (!album) return <NotFound />;

  return (
    <Container className='mt-3'>
      <Row className='p-1'>
        <Col className='pb-3' xs={12} md={3}>
          <Image fluid src={album['im:image'][2].label} rounded width={500} />
        </Col>
        <Col xs={12} md={9}>
          <h1>{album['im:name'].label}</h1>
          <h3>{album['im:artist'].label}</h3>
          <p className='m-0'>Price: {album['im:price'].label}</p>
          <p className='mt-0'>
            Release date: {formatDate(album['im:releaseDate'].label)}{' '}
          </p>
          <Button className='mb-4'>
            <a
              className='text-white'
              href={album.link.attributes.href}
              target='_blank'
              rel='noreferrer'
            >
              Buy on iTunes
            </a>
          </Button>
          <p>
            <small>{album.rights.label}</small>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AlbumDetail;
