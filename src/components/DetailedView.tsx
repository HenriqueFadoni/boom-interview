import React from 'react';
import { useSelector } from 'react-redux';

const DetailedView: React.FC = () => {
  const { tables } = useSelector((state: any) => state.fetchOptions);
  const { typeSelected } = useSelector((state: any) => state.detailOptions);
  let table: any = [];

  // for (const weekDays in tables) {
  //   if (typeSelected) {
  //     if () {
  //       tables[weekDays][typeSelected].map((post: any) => {
  //         if (!post.client_id) {
  //           table.push({
  //             id: post.client_id,
  //             counter: 1
  //           });
  //         } else {
  //           table.push({
  //             id: post.client_id,
  //             counter: 1
  //           });
  //         }
  //       });
  //     }
  //   }
  // }

  return (
    <div>
      {typeSelected}
    </div>
  )
}

export default DetailedView;
