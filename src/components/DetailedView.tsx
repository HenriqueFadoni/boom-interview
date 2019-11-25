import React, { FunctionComponent, ReactChild } from 'react';
import { useSelector } from 'react-redux';

import WeekDays from './WeekDays';
import DetailViewRow from './DetailViewRow';

const DetailedView: FunctionComponent = () => {
  const { tables } = useSelector((state: any) => state.fetchOptions);
  const { typeSelected } = useSelector((state: any) => state.detailOptions);
  let postsPerUser: any = {};
  let display: ReactChild[] = [];

  for (const weekDays in tables) {
    if (typeSelected) {
      tables[weekDays][typeSelected].forEach((post: any) => {
        let sum;
        if (!postsPerUser[post.client_id]) {
          postsPerUser[post.client_id] = [0, 0, 0, 0, 0, 0, 0];
        }

        switch (post.day_of_the_week.toString()) {
          case 'MONDAY':
            sum = postsPerUser[post.client_id][0] + 1;
            postsPerUser[post.client_id].splice(0, 1, sum);
            break;
          case 'TUESDAY':
            sum = postsPerUser[post.client_id][1] + 1;
            postsPerUser[post.client_id].splice(1, 1, sum);
            break;
          case 'WEDNESDAY':
            sum = postsPerUser[post.client_id][2] + 1;
            postsPerUser[post.client_id].splice(2, 1, sum);
            break;
          case 'THURSDAY':
            sum = postsPerUser[post.client_id][3] + 1;
            postsPerUser[post.client_id].splice(3, 1, sum);
            break;
          case 'FRIDAY':
            sum = postsPerUser[post.client_id][4] + 1;
            postsPerUser[post.client_id].splice(4, 1, sum);
            break;
          case 'SATURDAY':
            sum = postsPerUser[post.client_id][5] + 1;
            postsPerUser[post.client_id].splice(5, 1, sum);
            break;
          case 'SUNDAY':
            sum = postsPerUser[post.client_id][6] + 1;
            postsPerUser[post.client_id].splice(6, 1, sum);
            break;
          default: break;
        }
      });
    }
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
