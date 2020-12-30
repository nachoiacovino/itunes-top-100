import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className='mt-3'>
      <h1>Page not found</h1>
      <Link to='/'>Return to Albums</Link>
    </Container>
  );
};

export default NotFound;
