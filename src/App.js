import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getAlbumsStart } from './redux/albums/albumsActions';

const App = () => {
  const dispatch = useDispatch();
  const albums = useSelector(({ albums }) => albums.albums);

  useEffect(() => {
    dispatch(getAlbumsStart());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
};

export default App;
