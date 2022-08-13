import React from 'react';
import styled from 'styled-components';

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

export default function SearchInput() {
  return <Input placeholder="Search For Creators" />;
}
