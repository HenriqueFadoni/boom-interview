import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/index';

import { AppState } from '../index';

interface RowsProps {
  type?: string,
  posts: Array<string | number>,
  isHeader?: boolean
}

const Rows: FunctionComponent<RowsProps> = ({ type, posts, isHeader = false }) => {
  const { typeSelected } = useSelector((state: AppState) => state.detailOptions);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (type && type !== typeSelected && type !== 'TOTAL') {
      dispatch(actions.selectType(type));
    }
  }

  const row = posts.map((post, index) => (
    <div
      key={index}
      className={`${index === 0 && 'text-left'}`}
    >
      {post}
    </div>
  ));

  return (
    <div
      className={
        isHeader
          ? "table--header"
          : "table__row"
      }
      onClick={onClickHandler}
    >
      {row}
    </div>
  )
}

export default Rows;
