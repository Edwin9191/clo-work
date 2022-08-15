import React from 'react';
import styled from 'styled-components';
import { ClosetContent } from '../../api/closet';
import { PRICING_OPTIONS } from '../FilterArea/FilterArea';

const BREAK_POINT_MOBILE = 480;
const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
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
  list?: ClosetContent[];
  targetRef?: React.MutableRefObject<HTMLDivElement>;
}

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

const Target = styled.div`
  height: 1px;
  width: 100%;
`;

export default function ListArea({ list, targetRef }: ListAreaProps) {
  if (list?.length === 0) {
    return <div>loading ...</div>;
  }
  return (
    <Block>
      {list?.map((content: ClosetContent) => {
        return (
          <Card key={`${content.id}`}>
            <RatioImage
              src={content.imagePath}
              widthRatio={1.9}
              heightRatio={2.8}
            />
            <P>{content.title}</P>
            <SpanWrapper>
              <Span>{`${content.creator}`}</Span> |
              <Span>
                {content.pricingOption === 0
                  ? `$${content.price}`
                  : PRICING_OPTIONS[content.pricingOption]}
              </Span>
            </SpanWrapper>
          </Card>
        );
      })}
      <Target ref={targetRef} />
    </Block>
  );
}
