import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  /* border: 1px solid red; */
  background: #000;
  padding: 20px 30px;
`;

export default function header() {
  const srcString =
    'https://files-web.clo-set.com/web/connect/_next/static/images/logo-1341450d9fa4ae83a8550eaef4d215a2.svg';
  return (
    <Block>
      <img alt="" src={srcString} />
    </Block>
  );
}
