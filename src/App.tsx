import React, { useEffect, useRef } from 'react';
import './App.css';
import { useActions } from './hooks/useAction';
import useFilter from './hooks/useFilter';

function App() {
  const { getListThunk } = useActions();
  const {
    handleChange,
    handleCheck,
    handleClick,
    pricingOptions,
    searchKeyword,
    filteredList,
    setOptions,
  } = useFilter();

  useEffect(() => {
    getListThunk();
    setOptions(JSON.parse(localStorage.getItem('options')));
  }, []);

  useEffect(() => {
    localStorage.setItem('options', JSON.stringify(pricingOptions));
  }, [pricingOptions]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button
        type="button"
        onClick={() => handleChange(inputRef.current?.value)}
      >
        검색
      </button>
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
