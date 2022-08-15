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

export default function App() {
  const { getListThunk } = useActions();
  const {
    handleChange,
    handleCheck,
    handleClick,
    pricingOptions,
    filteredList,
    setOptions,
    handleReset,
  } = useFilter();

  useEffect(() => {
    getListThunk();
    if (localStorage.getItem('options')) {
      setOptions(JSON.parse(localStorage.getItem('options')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('options', JSON.stringify(pricingOptions));
  }, [pricingOptions]);

  const targetRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (filteredList) {
      handleClick();
    }
  });
  return (
    <>
      <Header />
      <ResponsiveBlock>
        <SearchArea handleChange={handleChange} />
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
