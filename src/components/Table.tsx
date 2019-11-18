import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';

import Rows from './Column';

const Table: React.FC = () => {
  const { tables } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // Breaking Tables Down into Types
  const tableHeaders = ['TYPES']

  let tableTypes: any = {
    EVENT: ['EVENT'],
    FOOD: ['FOOD'],
    REALESTATE: ['REAL ESTATE'],
    OTHER: ['OTHER'],
    TOTAL: ['TOTAL']
  }

  // Fetching Data
  useEffect(() => {
    dispatch(actions.fetchData());
  }, [dispatch]);

  // Table Display
  for (const table in tables) {
    if (!tableHeaders.includes(table)) {
      tableHeaders.push(table);
    }

    Object.keys(tables[table]).reduce((allPosts: any, post) => {
      if (post !== 'TOTAL') {
        allPosts[post].push(tables[table][post].length);
      } else {
        allPosts[post].push(tables[table][post]);
      }
      return allPosts
    }, { ...tableTypes });
  }

  return (
    <div className="table__container">
      <Rows
        key={tableHeaders[0]}
        posts={tableHeaders}
        isHeader={true}
      />
      <Rows
        key={tableTypes.FOOD[0]}
        posts={tableTypes.FOOD}
      />
      <Rows
        key={tableTypes.REALESTATE[0]}
        posts={tableTypes.REALESTATE}
      />
      <Rows
        key={tableTypes.OTHER[0]}
        posts={tableTypes.OTHER}
      />
      <Rows
        key={tableTypes.TOTAL[0]}
        posts={tableTypes.TOTAL}
      />
    </div>
  )
};

export default Table;
