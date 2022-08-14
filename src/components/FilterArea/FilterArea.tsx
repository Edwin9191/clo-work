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

        <CheckBox>
          <Input
            type="checkbox"
            onChange={e => handleCheck(e.target.checked, 0)}
            checked={!!pricingOptions.includes(0)}
          />
          <Span ml>Paid</Span>
        </CheckBox>

        <CheckBox>
          <Input
            type="checkbox"
            onChange={e => handleCheck(e.target.checked, 1)}
            checked={!!pricingOptions.includes(1)}
          />
          <Span ml>Free</Span>
        </CheckBox>

        <CheckBox>
          <Input
            type="checkbox"
            onChange={e => handleCheck(e.target.checked, 2)}
            checked={!!pricingOptions.includes(2)}
          />
          <Span ml>View Only</Span>
        </CheckBox>
      </Wrapper>

      <Button onClick={handleReset}>RESET</Button>
    </Block>
  );
}
