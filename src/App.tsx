import React, { useEffect } from 'react';
import './App.css';
import { useActions } from './hooks/useAction';
import { useAppSelector } from './hooks/useTypedSelector';

function App() {
  const { getListThunk } = useActions();
  const { list } = useAppSelector(state => state.closet);

  useEffect(() => {
    getListThunk();
  }, []);
  console.log(list);
  return <div>dddd</div>;
}

export default App;
