import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/index';

interface RowsProps {
  type?: string | any,
  posts: Array<string | number>,
  isHeader?: boolean
}

const Rows: React.FC<RowsProps> = ({ type, posts, isHeader = false }) => {
  const { typeSelected } = useSelector((state: any) => state.detailOptions);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (type && type !== typeSelected) dispatch(actions.selectType(type));
  }

  const row = posts.map((post, index) => (
    <div
      key={index}
      className={`${index === 0 && 'left'}`}
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
