import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';

import Rows from './Rows';

const Table: React.FC = () => {
  const { tables } = useSelector((state: any) => state.fetchOptions);
  const dispatch = useDispatch();
  const displayRows = [];

  // New Object based in Types
  let tableTypes: any = {
    TYPE: ['TYPES'],
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

  // Table Display - Breaking Tables Down into Types
  for (const table in tables) {
    if (!tableTypes.TYPE.includes(table)) {
      tableTypes.TYPE.push(table);
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

  // Creating JSX array
  for (const type in tableTypes) {
    if (type === 'TYPE') {
      displayRows.push(
        <Rows
          key={tableTypes[type][0]}
          posts={tableTypes[type]}
          isHeader={true}
        />
      );
    } else {
      displayRows.push(
        <Rows
          key={type}
          type={type}
          posts={tableTypes[type]}
        />
      );
    }
  }

  return (
    <div className="table__container">
      {displayRows}
    </div>
  )
};

export default Table;
