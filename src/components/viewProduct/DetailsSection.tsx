import { RxGear } from 'react-icons/rx';
import { CiTimer } from 'react-icons/ci';
import { SiLichess } from 'react-icons/si';
import { CiDollar } from 'react-icons/ci';
import { useGetProductQuery } from '../../slices/apiSlice';

const DetailsSection = () => {
  const { data: product } = useGetProductQuery(6781);
  const details = [
    {
      name: 'Technology',
      Icon: RxGear,
      tags: product.categories.map((el: { name: string }) => el.name),
    },
    {
      name: 'Business Model',
      Icon: SiLichess,
      tags: product.businessModels.map((el: { name: string }) => el.name),
    },
    { name: 'TRL', Icon: CiTimer, tags: [product.trl.name] },
    { name: 'Cost', Icon: CiDollar, tags: [product.investmentEffort] },
  ];
  return (
    <div className="p-4 flex flex-col ">
      <h1 className="font-semibold text-neutral text-neutral-700 self-start mb-4">
        Offer details
      </h1>
      <div className="grid grid-cols-2 place-content-between gap-8 text-neutral-600">
        {details.map((detail, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <detail.Icon />
              <span>{detail.name}</span>
            </div>
            <ul className="flex flex-wrap gap-1 ">
              {detail.tags.map((el: string, id: number) => (
                <li
                  key={id}
                  className="bg-neutral-100 px-3 rounded-full"
                >
                  {el.slice(0, 55)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsSection;
