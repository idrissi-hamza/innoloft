import React from 'react';
import { Link } from 'react-router-dom';
import { BsHouse } from 'react-icons/bs';
import { RiArrowRightSLine } from 'react-icons/ri';
import {
  useGetConfigurationQuery,
  useGetProductQuery,
} from '../slices/apiSlice';
import { appId } from '../utils/utils';

const Breadcrumb = () => {
  const { data: product } = useGetProductQuery(6781);
  const { data: configuration } = useGetConfigurationQuery(appId);

  return (
    <div className="flex justify-between p-4">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="#offers"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <BsHouse className="mr-2" />
            <RiArrowRightSLine className="mr-2" />
            offers
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <Link
              to="#"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 flex items-center"
            >
              <RiArrowRightSLine className="mr-2" />
              {product?.name}
            </Link>
          </div>
        </li>
      </ol>{' '}
      <button
        className="  text-white px-2 py-1 rounded ml-auto flex flex-wrap  "
        style={{ backgroundColor: `${configuration?.mainColor}` }}
      >
        <Link to="/Edit">Edit</Link>
      </button>
    </div>
  );
};

export default Breadcrumb;
