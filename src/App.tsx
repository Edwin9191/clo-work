import React, { useCallback, useEffect, useMemo } from 'react';
import { ClosetContent } from './api/closet';
import './App.css';
import { useActions } from './hooks/useAction';
import useFilter, { PageData } from './hooks/useFilter';
import usePagination from './hooks/usePagination';
import usePricingOption from './hooks/usePricingOption';
import { useAppSelector } from './hooks/useTypedSelector';

const test = (
  list: ClosetContent[] | null,
  pricingOptions: number[],
  { page, perPage }: PageData,
) => {
  let result;

  if (pricingOptions.length) {
    result = list?.filter((content: ClosetContent) =>
      pricingOptions.includes(content.pricingOption),
    );
  } else {
    result = list;
  }

  return result?.filter(
    (content: ClosetContent, index: number) => index < page * perPage,
  );
};

function App() {
  const { getListThunk } = useActions();
  const { list } = useAppSelector(state => state.closet);

  const { handleCheck, handleClick, pricingOptions, pageData } = useFilter();
  useEffect(() => {
    getListThunk();
  }, []);

  const filteredList = useMemo(
    () => test(list.data, pricingOptions, pageData),
    [pricingOptions, list, pageData],
  );
  console.log(filteredList);
  return (
    <div>
      <span>dfsdfadsfsd</span>
      <button type="button" onClick={() => handleClick()}>
        다음
      </button>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input
          type="checkbox"
          onChange={e => handleCheck(e.target.checked, 0)}
          checked={!!pricingOptions.includes(0)}
        />
        <span>체크1</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input
          type="checkbox"
          onChange={e => handleCheck(e.target.checked, 1)}
          checked={!!pricingOptions.includes(1)}
        />
        <span>체크2</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input
          type="checkbox"
          onChange={e => handleCheck(e.target.checked, 2)}
          checked={!!pricingOptions.includes(2)}
        />
        <span>체크3</span>
      </div>
    </div>
  );
}

export default App;
