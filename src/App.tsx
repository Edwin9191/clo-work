// import React, { useEffect, useRef } from 'react';
// import './App.css';
// import { useActions } from './hooks/useAction';
// import useFilter from './hooks/useFilter';

// function App() {
//   const { getListThunk } = useActions();
//   const {
//     handleChange,
//     handleCheck,
//     handleClick,
//     pricingOptions,
//     searchKeyword,
//     filteredList,
//     setOptions,
//   } = useFilter();

//   useEffect(() => {
//     getListThunk();
//     setOptions(JSON.parse(localStorage.getItem('options')));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('options', JSON.stringify(pricingOptions));
//   }, [pricingOptions]);

//   const inputRef = useRef<HTMLInputElement>(null);

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button
//         type="button"
//         onClick={() => handleChange(inputRef.current?.value)}
//       >
//         검색
//       </button>
//       <button type="button" onClick={() => handleClick()}>
//         다음
//       </button>
//       <div style={{ display: 'flex', flexDirection: 'row' }}>
//         <input
//           type="checkbox"
//           onChange={e => handleCheck(e.target.checked, 0)}
//           checked={!!pricingOptions.includes(0)}
//         />
//         <span>체크1</span>
//       </div>
//       <div style={{ display: 'flex', flexDirection: 'row' }}>
//         <input
//           type="checkbox"
//           onChange={e => handleCheck(e.target.checked, 1)}
//           checked={!!pricingOptions.includes(1)}
//         />
//         <span>체크2</span>
//       </div>
//       <div style={{ display: 'flex', flexDirection: 'row' }}>
//         <input
//           type="checkbox"
//           onChange={e => handleCheck(e.target.checked, 2)}
//           checked={!!pricingOptions.includes(2)}
//         />
//         <span>체크3</span>
//       </div>
//     </div>
//   );
// }

// export default App;

import styled from 'styled-components';
import React, { useEffect, useRef, useCallback } from 'react';
import { Header, SearchArea, FilterArea, ListArea } from './components';
import { useActions } from './hooks/useAction';
import useFilter from './hooks/useFilter';
import { useIntersect } from './hooks/useObserver';

const ResponsiveBlock = styled.div`
  margin: 0 auto;
  /* width: 1400px; */
  padding: 40px 30px;
  /* border: 1px solid red; */
  height: calc(100vh - 90px);
  /* height: 100vh; */

  /* @media ${props => props.theme.desktop} {
    border: 3px solid red;
    width: 1200px;
  } */

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
    searchKeyword,
    filteredList,
    setOptions,
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

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (filteredList) {
      handleClick();
    }
  });

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Header />
      <form>
        <ResponsiveBlock>
          <SearchArea />
          <FilterArea
            handleCheck={handleCheck}
            pricingOptions={pricingOptions}
          />
          {filteredList && <ListArea lists={filteredList} refTest={ref} />}
        </ResponsiveBlock>
      </form>
    </>
  );
}
