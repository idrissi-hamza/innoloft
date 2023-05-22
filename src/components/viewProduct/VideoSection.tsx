import React from 'react';
import ReactPlayer from 'react-player';
import { useGetProductQuery } from '../../slices/apiSlice';

const VideoSection = () => {
  const { data: product } = useGetProductQuery(6781);
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="font-semibold text-neutral text-neutral-700 self-start mb-4">
        Title
      </h1>
      <div className="flex items-center justify-center max-w-full   ">
        <ReactPlayer url={product.video} />
      </div>
    </div>
  );
};

export default VideoSection;
