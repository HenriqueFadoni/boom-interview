import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';

import Column from './Column';

const Table: React.FC = () => {
  const { tables } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const render = [];

  useEffect(() => {
    dispatch(actions.fetchData());
  }, [dispatch]);

  for (const table in tables) {
    render.push(
      <Column 
        key={table} 
        weekDay={table} 
        posts={tables[table]} 
      />
    );
  }

  return (
    <div>
      {render}
    </div>
  )
};

export default Table;
