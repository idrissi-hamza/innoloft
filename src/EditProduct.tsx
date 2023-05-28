import Sidebar from './components/Sidebar';
import OffredBy from './components/OffredBy';

import { Link } from 'react-router-dom';
import EditMainSection from './components/editProduct/EditMainSection';
import EditVideoSection from './components/editProduct/EditVideoSection';
import EditDetailsSection from './components/editProduct/EditDetailsSection';
import { useGetConfigurationQuery } from './slices/apiSlice';
import { appId } from './utils/utils';

const EditProduct = () => {
  const { data: configuration } = useGetConfigurationQuery(appId);
  return (
    <div className="max-w-screen-2xl mx-auto px-2 flex flex-col md:flex-row">
      <div className=" pt-6  md:w-1/5 hidden md:block ">
        <Sidebar />
      </div>
      <div className="md:w-4/5 ">
        <div className="flex items-center justify-between p-4 ">
          <h1 className="font-semibold text-neutral text-neutral-700">
            Offer Title
          </h1>
          <button
            className=" text-white px-2 py-1 rounded ml-auto flex flex-wrap  "
            style={{ backgroundColor: `${configuration?.mainColor}` }}
          >
            <Link to="/product">View Offer</Link>
          </button>
        </div>

        <div className="flex flex-col md:flex-row  mb-6  md:border-0 rounded-t-md ">
          <div className=" md:w-4/6   bg-white md:border rounded-t-md md:rounded-t-none md:rounded-l-md md:flex ">
            <EditMainSection />
          </div>
          <div className="md:w-2/6  p-4 md:border-r md:border-y flex flex-col gap-4 bg-white rounded-b-md md:rounded-b-none md:rounded-r-md">
            <OffredBy edit={true} />
          </div>
        </div>
        <div className=" mb-6 bg-white border rounded-md">
          <EditVideoSection />
        </div>
        <div className=" mb-6 bg-white border rounded-md">
          <EditDetailsSection />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
