import React, { useRef } from 'react';
import styled from 'styled-components';
import Icon from '../../assets/Search.png';

const Block = styled.div`
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
  handleKeyword: (keyword: string) => void;
}

export default function SearchArea({ handleKeyword }: SearchAreaProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Block>
      <Input
        placeholder="Search For Creators"
        ref={inputRef}
        onKeyDown={e => {
          if (e.key === 'Enter') handleKeyword(inputRef.current.value);
        }}
      />
      <Button
        type="button"
        onClick={() => handleKeyword(inputRef.current.value)}
      >
        <SearchIcon src={Icon} alt="icon" />
      </Button>
    </Block>
  );
}
