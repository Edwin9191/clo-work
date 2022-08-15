import React from 'react';
import styled, { css } from 'styled-components';
import { Span } from '../Common';

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 30px;
  background-color: #121215;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.div`
  margin-left: 10px;
`;

const Input = styled.input``;

const Button = styled.button`
  color: #fff;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 10px;

  &:hover {
    border: 1px solid #fff;
  }
`;

export const PRICING_OPTIONS: string[] = ['Paid', 'Free', 'View Only'];

interface FilterAreaProps {
  handleReset: () => void;
  handleCheck: (checked: boolean, option: number) => void;
  pricingOptions: number[];
}

export default function FilterArea({
  handleReset,
  handleCheck,
  pricingOptions,
}: FilterAreaProps) {
  return (
    <Block>
      <Wrapper>
        <Span active>Pricing Options</Span>
        {PRICING_OPTIONS.map((option, i) => (
          <CheckBox key={`${option}-${i}`}>
            <Input
              data-testid={`checkbox-${i}`}
              type="checkbox"
              onChange={e => handleCheck(e.target.checked, i)}
              checked={!!pricingOptions.includes(i)}
            />
            <Span ml>{option}</Span>
          </CheckBox>
        ))}
      </Wrapper>
      <Button onClick={handleReset}>RESET</Button>
    </Block>
  );
}
