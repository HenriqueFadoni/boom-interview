import React from 'react';

interface PostsObj {
  EVENT: Array<Object>,
  FOOD: Array<Object>,
  REALESTATE: Array<Object>,
  OTHER: Array<Object>,
  TOTAL: number
}

interface ColumnProps {
  weekDay: string,
  posts: PostsObj
}

const Column: React.FC<ColumnProps> = ({ weekDay, posts }) => (
  <div>
    <div>{weekDay}</div>
    <div>{posts.REALESTATE.length}</div>
    <div>{posts.FOOD.length}</div>
    <div>{posts.EVENT.length}</div>
    <div>{posts.TOTAL}</div>
  </div>
)

export default Column;
