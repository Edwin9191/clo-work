import React from 'react';
import styled from 'styled-components';
import Icon from './Search.png';

const Button = styled.button`
  position: absolute;
  /* border: 1px solid blue; */
  color: red;
  top: 25px;
  right: 20px;
  background: none;
  border: none;
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  background: none;
`;

export default function SearchButton() {
  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log('work');
  };

  return (
    <Button type="submit" onClick={handleSearch}>
      <SearchIcon src={Icon} alt="icon" />
    </Button>
  );
}
