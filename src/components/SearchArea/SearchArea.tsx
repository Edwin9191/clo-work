import React from 'react';
import styled from 'styled-components';
import { SearchInput, SearchButton } from '../Common';

const Block = styled.div`
  /* border: 1px solid blue; */
  position: relative;
  margin-bottom: 15px;
`;

export default function SearchArea() {
  return (
    <Block>
      <SearchInput />
      <SearchButton />
    </Block>
  );
}
