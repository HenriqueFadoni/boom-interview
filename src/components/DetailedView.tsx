import React from 'react';
import { useSelector } from 'react-redux';

const DetailedView: React.FC = () => {
  const { tables } = useSelector((state: any) => state.fetchOptions);
  const { typeSelected } = useSelector((state: any) => state.detailOptions);

  return (
    <div>
      {typeSelected}
    </div>
  )
}

export default DetailedView;
