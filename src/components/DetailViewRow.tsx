import React, { FunctionComponent } from 'react';

interface DetailViewRowProps {
  id: string,
  client: number[]
}

const DetailViewRow: FunctionComponent<DetailViewRowProps> = ({ id, client }) => {
  const weekPosts = client.map((numPost, i) => (
    <div 
      key={`${id}-${i}`}
      className="detail-view--items"
    >
      {numPost}
    </div>
  ));

  return (
    <div className="detail-view__column text-center">
      <div className="detail-view--header">Client {id}</div>
      {weekPosts}
    </div>
  )
};

export default DetailViewRow;
