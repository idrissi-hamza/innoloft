import React from 'react';
import { useGetProductQuery } from '../slices/apiSlice';

const UserInfo = () => {
  const { data: product } = useGetProductQuery(6781);
  return (
    <div className="flex items-center gap-4">
      <img
        src={product?.user?.profilePicture}
        className="h-12 bg-red-100 rounded-full"
        alt="Logo"
      />
      <div className="text-neutral-700 leading-5">
        <h1 className="font-semibold">
          {product?.user?.firstName + ' ' + product?.user?.lastName}
        </h1>
        <span>{product?.company?.name}</span>
      </div>
    </div>
  );
};

export default UserInfo;
