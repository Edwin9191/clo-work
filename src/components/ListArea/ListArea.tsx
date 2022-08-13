import React from 'react';
import styled from 'styled-components';
import { ClosetContent } from '../../api/closet';

const Block = styled.div`
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 90%;
  /* height: 300px; */
`;

// const Row = styled.div`
//   height: 300px;
// `;

const calcWidthPercent = (span: any): number => {
  if (!span) return 0;
  const width = (span / 12) * 100;
  return width;
};

const BREAK_POINT_MOBILE = 480;
const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Col = styled.div<{ xs: number; sm: number; md: number; lg: number }>`
  float: left;
  /* padding: 1rem; */
  height: 500px;
  color: #fff;
  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `100%`)};

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    /* border: 1px solid yellowgreen; */
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
    /* height: 20rem; */
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    /* border: 1px solid blue; */
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
    /* height: 25rem; */
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    /* border: 1px solid red; */
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
    /* height: 30rem; */
  }
`;

const P = styled.p`
  color: #fff;
  font-weight: 900;
`;

const Span = styled.span`
  color: #fff;
`;

const SpanWrapper = styled.div`
  span + span {
    margin-left: 5px;
  }
`;

interface ListAreaProps {
  lists?: ClosetContent[];
}

const priceType: any = {
  0: 'PAID',
  1: 'FREE',
  2: 'VIEW ONLY',
};

export default function ListArea({ lists }: ListAreaProps) {
  if (lists?.length === 0) {
    return <div>loading ...</div>;
  }
  return (
    <Block>
      {lists?.map((list: any, i) => {
        return (
          <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <Img alt="" src={list.imagePath} />
            <P>{list.title}</P>
            <SpanWrapper>
              <Span>{`${list.creator}`}</Span> |
              <Span>
                {list.pricingOption === 0
                  ? `$${list.price}`
                  : priceType[list.pricingOption]}
              </Span>
            </SpanWrapper>
          </Col>
        );
      })}
    </Block>
  );
}
