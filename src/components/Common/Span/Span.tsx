import React from 'react';
import styled, { css } from 'styled-components';

interface SpanProps {
  children: React.ReactNode;
  active?: boolean;
  ml?: boolean;
}

const CustomSpan = styled.span<{ active?: boolean; ml?: boolean }>`
  color: #fff;

  ${props =>
    props.active &&
    css`
      color: rgb(191, 191, 198);
      font-size: 5px;
    `}

  ${props =>
    props.ml &&
    css`
      margin-left: 2px;
    `}
`;

export default function Span({ active, ml, children }: SpanProps) {
  return (
    <CustomSpan active={active} ml={ml}>
      {children}
    </CustomSpan>
  );
}
