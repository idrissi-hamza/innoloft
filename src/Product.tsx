import Sidebar from './components/Sidebar';
import MainSection from './components/viewProduct/MainSection';
import Breadcrumb from './components/Breadcrumb';
import OffredBy from './components/OffredBy';
import VideoSection from './components/viewProduct/VideoSection';
import DetailsSection from './components/viewProduct/DetailsSection';
import { useGetProductQuery } from './slices/apiSlice';

const Product = () => {
  const { data: product } = useGetProductQuery(6781);

  return (
    <div className="max-w-screen-2xl mx-auto px-2 flex flex-col md:flex-row">
      <div className=" pt-6  md:w-1/5 hidden md:block ">
        <Sidebar />
      </div>
      <div className="md:w-4/5 ">
        <Breadcrumb />

        <div className="flex flex-col md:flex-row mb-6  md:border-0 rounded-t-md">
          <div className=" md:w-4/6   bg-white md:border rounded-t-md md:rounded-t-none md:rounded-l-md ">
            <MainSection  />
          </div>
          <div className="md:w-2/6  p-4 md:border-r md:border-y flex flex-col gap-6 bg-white rounded-b-md md:rounded-b-nonemd:rounded-r-md">
            <OffredBy />
          </div>
        </div>
        <div className=" mb-6 bg-white border rounded-md">
          <VideoSection />
        </div>
        <div className=" mb-6 bg-white border rounded-md">
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default Product;
