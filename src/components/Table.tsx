import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/actions/index';

import Rows from './Rows';

const Table: FunctionComponent = () => {
  const { tables } = useSelector((state: any) => state.fetchOptions);
  const dispatch = useDispatch();
  let displayRows = [];
  const tableHeader: string[] = ['TYPE'];
  const tableDisplay: { [index: string]: any } = {};

  // Fetching Data
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Table Display - Breaking Tables Down into Types
  for (const day in tables) {
    if (!tableHeader.includes(day)) {
      tableHeader.push(day);
    }

    Object.keys(tables[day]).forEach(post => {
      if (!tableDisplay[post]) {
        tableDisplay[post] = [post]
      }

      if (post !== 'TOTAL') {
        tableDisplay[post].push(tables[day][post].length);
      } else {
        tableDisplay[post].push(tables[day][post]);
      }
    });
  }

  // Creating JSX array
  for (const type in tableDisplay) {
    displayRows.push(
      <Rows
        key={type}
        type={type}
        posts={tableDisplay[type]}
      />
    );
  }
  
  return (
    <div className="table__container">
      <Rows
        key={tableHeader[0]}
        posts={tableHeader}
        isHeader
      />
      {displayRows}
    </div>
  )
};

export default Table;
