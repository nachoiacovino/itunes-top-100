import { Container } from 'react-bootstrap';

import { ReactComponent as Spinner } from '../assets/spinner.svg';

const Loading = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loading;
