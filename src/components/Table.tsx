import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/actions/index';

import { AppState } from '../index';

import Rows from './Rows';

interface TableDisplay {
  [index: string]: Array<string | number>
}

const Table: FunctionComponent = () => {
  const { tables } = useSelector((state: any) => state.fetchOptions);
  const dispatch = useDispatch();
  let displayRows = [];
  const tableHeader: string[] = ['TYPE'];
  const tableDisplay: TableDisplay = {};

  // Fetching Data
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Table Display - Breaking Tables Down into Types
  for (const day in tables) {
    if (!tableHeader.includes(day)) {
      tableHeader.push(day);
    }

    Object.keys(tables[day]).forEach((post: string) => {
      if (!tableDisplay[post]) {
        tableDisplay[post] = [post]
      }

      if (post !== 'TOTAL') {
        tableDisplay[post].push(tables[day][post].length); //ERROR HERE
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
