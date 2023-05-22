import React from 'react';
import { IoRibbonOutline } from 'react-icons/io5';
import createMarkup from '../../utils/createMarkup';
import { useGetProductQuery } from '../../slices/apiSlice';

const MainSection = () => {
  const { data: product } = useGetProductQuery(6781);

  return (
    <div className="relative ">
      <img
        src={product?.picture}
        className="w-full aspect-[2] mr-3"
        alt="product "
      />
      <div className="absolute top-0 left-0  flex bg-white rounded-md">
        <div className="bg-blue-600 p-2 rounded-tl-md rounded-br-md  flex items-center">
          <IoRibbonOutline />
        </div>
        <div className="bg-white p-2 pl-3 rounded-br-md font-semibold">
          Patent
        </div>
      </div>
      <div className="py-3 px-4">
        <h1 className="font-semibold text-neutral text-neutral-700 mb-2">
          {product.name}
        </h1>

        <p
          className="custom-stylesz text-neutral-500"
          dangerouslySetInnerHTML={createMarkup(product.description)}
        ></p>
      </div>
    </div>
  );
};

export default MainSection;
