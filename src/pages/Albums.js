import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Album from '../components/Album';
import Error from '../components/Error';
import Loading from '../components/Loading';
import SearchBox from '../components/SearchBox';
import { getAlbumsStart } from '../redux/albums/albumsActions';

const Albums = () => {
  const [term, setTerm] = useState('');
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [seeFavorites, setSeeFavorites] = useState(false);

  const dispatch = useDispatch();
  const albums = useSelector(({ albums }) => albums.albums);
  const loading = useSelector(({ albums }) => albums.loading);
  const error = useSelector(({ albums }) => albums.error);
  const onSearchChange = (e) => setTerm(e.target.value);

  useEffect(() => {
    dispatch(getAlbumsStart());
  }, [dispatch]);

  useEffect(() => {
    setFilteredAlbums(
      albums.filter(
        (album) =>
          album['im:name'].label.toLowerCase().includes(term.toLowerCase()) ||
          album['im:artist'].label.toLowerCase().includes(term.toLowerCase()),
      ),
    );
  }, [albums, term]);

  useEffect(() => {
    if (seeFavorites) {
      setFilteredAlbums(albums.filter((album) => album.favorite));
    } else {
      setFilteredAlbums(albums);
    }
  }, [albums, seeFavorites]);

  if (error) return <Error>{error.message}</Error>;
  if (loading) return <Loading />;

  return (
    <Container>
      <Row>
        <Col xs={10}>
          <h1 className='mt-3'>Albums</h1>
        </Col>
        <Col className='d-flex align-items-end'>
          {seeFavorites ? (
            <Button onClick={() => setSeeFavorites(false)}>See all</Button>
          ) : (
            <Button onClick={() => setSeeFavorites(true)}>See favorites</Button>
          )}
        </Col>
      </Row>

      <hr />
      <SearchBox onSearchChange={onSearchChange} />
      {filteredAlbums.map((album) => (
        <Album key={album.id.attributes['im:id']} album={album} />
      ))}
    </Container>
  );
};

export default Albums;
