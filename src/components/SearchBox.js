import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';

const SearchBox = ({ onSearchChange }) => {
  return (
    <InputGroup className='mb-3'>
      <InputGroup.Prepend>
        <InputGroup.Text>
          <BiSearch />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder='Filter'
        aria-label='Filter'
        onChange={onSearchChange}
      />
    </InputGroup>
  );
};

export default SearchBox;
