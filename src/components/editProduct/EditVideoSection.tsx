import React, { useState } from 'react';
import {
  useEditProductMutation,
  useGetProductQuery,
} from '../../slices/apiSlice';
import { BsCheck } from 'react-icons/bs';

const EditVideoSection = () => {
  const { data: product } = useGetProductQuery(6781);

  const [video, setVideo] = useState('');

  const [editProduct, { isLoading }] = useEditProductMutation();
  const saveHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await editProduct({
        ...product,
        video,
      }).unwrap();

      console.log('Text saved successfully!');
    } catch (error) {
      console.error('Error saving text:', error);
    }
  };
  return (
    <div className="p-4 flex flex-col ">
      <h1 className="font-semibold text-neutral text-neutral-700 self-start mb-4">
        Title
      </h1>
      <form
        className=" px-6 mb-4  "
        onSubmit={saveHandler}
      >
        <input
          className="w-full border-2 outline-none px-2 py-1 rounded mb-2 "
          type="text"
          name="video"
          placeholder="Add youtube or vimeo link "
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />

        {video !== '' && (
          <button
            type="submit"
            className="bg-blue-700 disabled:bg-neutral-500 text-white px-3 py-1 rounded-md flex  items-center ml-auto mt-4"
            disabled={isLoading}
          >
            {<BsCheck className="text-2xl " />} <span>Save</span>
          </button>
        )}
      </form>
    </div>
  );
};

export default EditVideoSection;
