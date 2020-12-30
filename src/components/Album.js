import { Media } from 'react-bootstrap';

const Album = ({ album }) => {
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
        </Media.Body>
      </Media>
    </>
  );
};

export default Album;
