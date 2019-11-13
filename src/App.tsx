import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from './store/actions/index';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      Test Boom
    </div>
  )
};

export default App;
