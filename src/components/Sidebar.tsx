import React from 'react';
import UserInfo from './UserInfo';
import { useGetProductQuery } from '../slices/apiSlice';

const Sidebar = () => {
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductQuery(6781);

  return (
    <>
      <UserInfo />
      {/* home memebers organizations navigation to add later */}
    </>
  );
};

export default Sidebar;
