import React from 'react';

interface RowsProps {
  posts: Array<string | number>,
  isHeader?: boolean
}

const Rows: React.FC<RowsProps> = ({ posts, isHeader = false }) => {
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
    >
      {row}
    </div>
  )
}

export default Rows;
