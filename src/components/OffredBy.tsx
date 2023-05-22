import React from 'react';
import UserInfo from './UserInfo';
import Map from './Map';
import {
  useGetConfigurationQuery,
  useGetProductQuery,
} from '../slices/apiSlice';
import { appId } from '../utils/utils';

const OffredBy = ({edit=false}) => {
  const { data: configuration } = useGetConfigurationQuery(appId);

  const { data: product } = useGetProductQuery(6781);
  
  return (
    <>
      <span className="text-blue-800 font-semibold">Offred By</span>
      <img
        src={product.company.logo}
        className="w-1/2"
        alt="Logo"
      />

      {!configuration?.hasUserSection && <UserInfo />}
      {!edit && <Map />}
    </>
  );
};

export default OffredBy;
