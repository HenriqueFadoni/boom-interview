import { Post } from '../store/types/Post';

interface PostsPerUser {
  [index: number]: number[]
}

export const organizeWeekDays = (postsPerUser: PostsPerUser, post: Post) => {
  let sum;

  switch (post.day_of_the_week.toString()) {
    case 'MONDAY':
      sum = postsPerUser[post.client_id][0] + 1;
      postsPerUser[post.client_id].splice(0, 1, sum);
      return postsPerUser;
    case 'TUESDAY':
      sum = postsPerUser[post.client_id][1] + 1;
      postsPerUser[post.client_id].splice(1, 1, sum);
      return postsPerUser;
    case 'WEDNESDAY':
      sum = postsPerUser[post.client_id][2] + 1;
      postsPerUser[post.client_id].splice(2, 1, sum);
      return postsPerUser;
    case 'THURSDAY':
      sum = postsPerUser[post.client_id][3] + 1;
      postsPerUser[post.client_id].splice(3, 1, sum);
      return postsPerUser;
    case 'FRIDAY':
      sum = postsPerUser[post.client_id][4] + 1;
      postsPerUser[post.client_id].splice(4, 1, sum);
      return postsPerUser;
    case 'SATURDAY':
      sum = postsPerUser[post.client_id][5] + 1;
      postsPerUser[post.client_id].splice(5, 1, sum);
      return postsPerUser;
    case 'SUNDAY':
      sum = postsPerUser[post.client_id][6] + 1;
      postsPerUser[post.client_id].splice(6, 1, sum);
      return postsPerUser;
    default:
      return postsPerUser;
  }
}
