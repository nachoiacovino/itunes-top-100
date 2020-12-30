import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getSongsStart } from './redux/songs/songsActions';

const App = () => {
  const dispatch = useDispatch();
  const songs = useSelector(({ songs }) => songs.songs);

  useEffect(() => {
    dispatch(getSongsStart());
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
