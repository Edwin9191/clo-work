import React from 'react';
import styled from 'styled-components';
import { ClosetContent } from '../../api/closet';

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// const Row = styled.div`
//   height: 300px;
// `;

const calcWidthPadding = (heightRatio: any, widthRatio: any) => {
  const result = (heightRatio / widthRatio) * 100;
  return result;
};
const ImgWrapper = styled.div<{ heightRatio: number; widthRatio: number }>`
  width: 100%;
  position: relative;
  padding-top: ${({ heightRatio, widthRatio }) =>
    `${calcWidthPadding(heightRatio, widthRatio)}%`};
`;

const Img = styled.img<{ url?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const calcWidthPercent = (span: any): number => {
  if (!span) return 0;
  const width = (span / 12) * 100;
  return width;
};

const BREAK_POINT_MOBILE = 480;
const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Col = styled.div<{ xs: number; sm: number; md: number; lg: number }>`
  display: flex;
  flex-direction: column;
  width: calc(100% / 4);
  padding: 0.5rem;

  @media only screen and (max-width: ${BREAK_POINT_PC}px) {
    width: calc(100% / 3);
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: calc(50%);
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    width: calc(100%);
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
  targetRef: React.MutableRefObject<HTMLDivElement>;
}

const priceType: any = {
  0: 'PAID',
  1: 'FREE',
  2: 'VIEW ONLY',
};

const RatioImageBlock = styled.div`
  width: 100%;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

interface RatioImageProps {
  widthRatio: number;
  heightRatio: number;
  src: string;
}

function RatioImage({ heightRatio, widthRatio, src }: RatioImageProps) {
  const paddingTop = `${(heightRatio / widthRatio) * 100}%`;

  return (
    <RatioImageBlock
      style={{
        paddingTop,
      }}
    >
      <img src={src} alt="" />
    </RatioImageBlock>
  );
}

export default function ListArea({ lists, targetRef }: ListAreaProps) {
  if (lists?.length === 0) {
    return <div>loading ...</div>;
  }
  return (
    <Block>
      {lists?.map((list: any, i) => {
        return (
          <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <RatioImage
              src={list.imagePath}
              widthRatio={1.9}
              heightRatio={2.8}
            />
            {/* <ImgWrapper widthRatio={1.91} heightRatio={2.5}>
              <Img alt="" src={list.imagePath} url={list.imagePath} />
            </ImgWrapper> */}
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
      <div ref={targetRef} style={{ height: 1, width: '100%' }} />
    </Block>
  );
}
