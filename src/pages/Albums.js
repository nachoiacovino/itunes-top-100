import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Album from '../components/Album';
import SearchBox from '../components/SearchBox';
import { getAlbumsStart } from '../redux/albums/albumsActions';

const Albums = () => {
  const [term, setTerm] = useState('');
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  const dispatch = useDispatch();
  const albums = useSelector(({ albums }) => albums.albums);
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

  return (
    <Container>
      <h1 className='mt-3'>Albums</h1>
      <hr />
      <SearchBox onSearchChange={onSearchChange} />
      {filteredAlbums.map((album) => (
        <Album key={album.id.attributes['im:id']} album={album} />
      ))}
    </Container>
  );
};

export default Albums;
