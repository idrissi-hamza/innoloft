import React from 'react';
import { IoRibbonOutline } from 'react-icons/io5';
import createMarkup from '../../utils/createMarkup';
import { useGetConfigurationQuery, useGetProductQuery } from '../../slices/apiSlice';
import { appId } from '../../utils/utils';

const MainSection = () => {
  const { data: product } = useGetProductQuery(6781);
  const { data: configuration } = useGetConfigurationQuery(appId);

  return (
    <div className="relative ">
      <img
        src={product?.picture}
        className="w-full aspect-[2] mr-3"
        alt="product "
      />
      <div className="absolute top-0 left-0  flex bg-white rounded-md">
        <div className=" p-2 rounded-tl-md rounded-br-md  flex items-center text-white"
                style={{ backgroundColor: `${configuration?.mainColor}` }}

        >
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
