import styled from 'styled-components';
import React, { useEffect } from 'react';
import { Header, SearchArea, FilterArea, ListArea } from './components';
import { useActions } from './hooks/useAction';
import useFilter from './hooks/useFilter';
import { useIntersect } from './hooks/useObserver';

const ResponsiveBlock = styled.div`
  margin: 0 auto;
  padding: 40px 30px;
  height: calc(100vh - 90px);

  @media ${props => props.theme.laptop} {
    width: 100%;
  }

  @media ${props => props.theme.tablet} {
    width: 100%;
  }

  @media ${props => props.theme.mobile} {
    width: 100%;
  }
`;

const setStorage = (key: string, value: number[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getStorage = (key: string) => {
  return localStorage.getItem(key);
};

export default function App() {
  const { getListThunk } = useActions();
  const {
    handleKeyword,
    handleCheck,
    handleNextPage,
    pricingOptions,
    filteredList,
    saveOptions,
    handleReset,
  } = useFilter();

  useEffect(() => {
    getListThunk();
    if (getStorage('options')) {
      saveOptions(JSON.parse(getStorage('options')));
    }
  }, []);

  useEffect(() => {
    setStorage('options', pricingOptions);
  }, [pricingOptions]);

  const targetRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (filteredList) {
      handleNextPage();
    }
  });
  return (
    <>
      <Header />
      <ResponsiveBlock>
        <SearchArea handleKeyword={handleKeyword} />
        <FilterArea
          handleCheck={handleCheck}
          handleReset={handleReset}
          pricingOptions={pricingOptions}
        />
        {filteredList && <ListArea list={filteredList} targetRef={targetRef} />}
      </ResponsiveBlock>
    </>
  );
}
