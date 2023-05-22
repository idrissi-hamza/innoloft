import React, { useState } from 'react';
import { RxGear } from 'react-icons/rx';
import { CiTimer } from 'react-icons/ci';
import { SiLichess } from 'react-icons/si';
import { CiDollar } from 'react-icons/ci';
import {
  useEditProductMutation,
  useGetProductQuery,
  useGetTrlQuery,
} from '../../slices/apiSlice';
import Select from 'react-select';
import { BsCheck } from 'react-icons/bs';
import { nanoid } from 'nanoid';


const EditDetailsSection = () => {
  const { data: product } = useGetProductQuery(6781);
  const { data: trl } = useGetTrlQuery(null);
  const [editProduct, { isLoading }] = useEditProductMutation();

  const trlObtions = trl?.map(
    (el: { id: string; name: string; description: null }) => {
      return {
        value: el.id,
        label: el.name,
      };
    }
  );
  const [technologies, setTechnologies] = useState('');
  const [businessModels, setBusinessModels] = useState('');
  const [trlOption, setTrlOption] = useState<any>();
  const [cost, setCost] = useState(product.investmentEffort);

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await editProduct({
        ...product,
        categories: [{ id: nanoid(), name: technologies }],
        businessModels: [{ id: nanoid(), name: businessModels }],
        trl: { id: trlOption.value, name: trlOption.lable },
        investmentEffort: cost,
      }).unwrap();

      console.log('change saved successfully!');
    } catch (error) {
      console.error('Error saving details :', error);
    }
  };

  return (
    <div className="p-4 flex flex-col ">
      <h1 className="font-semibold text-neutral text-neutral-700 self-start mb-4">
        Offer details
      </h1>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-2 place-content-between gap-8 text-neutral-600">
          <label className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <RxGear />
              <span>Technologies</span>
            </div>
            <input
              className="w-full border-[1.5px]  outline-none px-2 py-1.5 rounded mb-2 "
              type="text"
              name="technologies"
              placeholder="Add a Technologies "
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
            />
          </label>
          {/* ///////////////////////////// */}
          <label className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <SiLichess />
              <span>Business Model</span>
            </div>
            <input
              className="w-full border-[1.5px]  outline-none px-2 py-1.5 rounded mb-2 "
              type="text"
              name="businessModels"
              placeholder="Business Model "
              value={businessModels}
              onChange={(e) => setBusinessModels(e.target.value)}
            />
          </label>
          {/* ////////////////////////////////// */}
          <label className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CiTimer />
              <span>TRL</span>
            </div>

            <Select
              className="border"
              options={trlObtions}
              onChange={(option) => setTrlOption(option)}
              // isMulti
            />
          </label>
          {/* /////////////// */}
          <label className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CiDollar />
              <span>Cost</span>
            </div>
            <input
              className="w-full border-[1.5px] outline-none px-2 py-1.5 rounded mb-2 "
              type="text"
              name="cost"
              placeholder="Enter the cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-700 disabled:bg-neutral-500 text-white px-3 py-1 rounded-md flex  items-center ml-auto mt-4"
          disabled={isLoading}
        >
          {<BsCheck className="text-2xl " />} <span>Save</span>
        </button>
      </form>
    </div>
  );
};

export default EditDetailsSection;
