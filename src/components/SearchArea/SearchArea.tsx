import React, { useRef } from 'react';
import styled from 'styled-components';
import Icon from '../Common/SearchButton/Search.png';

const Block = styled.div`
  /* border: 1px solid blue; */
  position: relative;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 76px;
  padding: 24px;
  font-size: 20px;
  font-weight: normal;
  color: #fff;
  background-color: #202025;
  border: 1px solid #202025;
  transition: border 0.2s ease-in-out;
`;

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

interface SearchAreaProps {
  handleChange: (keyword: string) => void;
}

export default function SearchArea({ handleChange }: SearchAreaProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Block>
      <Input placeholder="Search For Creators" ref={inputRef} />
      <Button
        type="button"
        onClick={() => handleChange(inputRef.current.value)}
      >
        <SearchIcon src={Icon} alt="icon" />
      </Button>
    </Block>
  );
}
