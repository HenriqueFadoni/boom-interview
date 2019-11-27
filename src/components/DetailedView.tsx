import React, { FunctionComponent, ReactChild } from 'react';
import { useSelector } from 'react-redux';

import WeekDays from './WeekDays';
import DetailViewRow from './DetailViewRow';
import { organizeWeekDays } from '../utilities/utilities';

import { AppState } from '../index';
import { Post } from '../store/types/Post';

interface PostsPerUser {
  [index: number]: number[]
}

const DetailedView: FunctionComponent = () => {
  const { tables } = useSelector((state: any) => state.fetchOptions);
  const { typeSelected } = useSelector((state: AppState) => state.detailOptions);
  let postsPerUser: PostsPerUser = {};
  let display: ReactChild[] = [];

  for (const weekDays in tables) {
    if (typeSelected) {
      tables[weekDays][typeSelected].forEach((post: Post) => {
        if (!postsPerUser[post.client_id]) {
          postsPerUser[post.client_id] = [0, 0, 0, 0, 0, 0, 0];
        }

        postsPerUser = organizeWeekDays(postsPerUser, post);
      });
    }
    console.log(postsPerUser)
  }

  for (const user in postsPerUser) {
    display.push(
      <DetailViewRow
        key={`Client-${user}`}
        id={user}
        client={postsPerUser[user]}
      />
    )
  }

  return (
    <div className="detail-view__container">
      {typeSelected && <WeekDays />}
      {display}
    </div>
  )
}

export default DetailedView;
