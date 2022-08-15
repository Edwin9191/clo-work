import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FilterArea, SearchArea } from './components';

describe('<App/>', () => {
  it('Test Search', () => {
    const handleKeyword = jest.fn();
    render(<SearchArea handleKeyword={handleKeyword} />);

    fireEvent.change(screen.getByPlaceholderText('Search For Creators'), {
      target: {
        value: 'Adam',
      },
    });

    fireEvent.click(screen.getByRole('button'));

    expect(handleKeyword).toBeCalledWith('Adam');
  });

  it('Test Filter', () => {
    const handleCheck = jest.fn();
    const handleReset = jest.fn();
    const pricingOptions = [0];
    render(
      <FilterArea
        handleCheck={handleCheck}
        handleReset={handleReset}
        pricingOptions={pricingOptions}
      />,
    );

    fireEvent.change(screen.getByTestId('checkbox-1'), {
      target: {
        checked: true,
      },
    });

    const checkBox = screen.getByTestId('checkbox-1');

    expect(checkBox.checked).toEqual(true);
  });
});
