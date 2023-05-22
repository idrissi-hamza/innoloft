import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGetConfigurationQuery } from '../slices/apiSlice';
import { appId } from '../utils/utils';

const Navbar = () => {
  const { data: configuration } = useGetConfigurationQuery(appId);

  const [isOpen, setIsOpen] = useState(false);
  console.log(configuration);
  return (
    <nav
      className="border-b bg-neutral-900"
      style={{ backgroundColor: `${configuration?.mainColor}` }}
    >
      <div className="max-w-screen-2xl flex flex-wrap  items-center justify-between mx-auto p-4 ">
        <Link
          to="/"
          className="flex items-center  bg-gray-200s"
        >
          <img
            src={configuration?.logo}
            className="h-8 mr-3 filter invert   brightness-0     "
            
            alt="Logo"
          />
        </Link>
        <button
          type="button"
          className=" p-2 ml-3 text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 rotate-90 "
          onClick={() => setIsOpen((prv) => !prv)}
        >
          III
        </button>
        <div
          className={`${
            !isOpen && 'hidden'
          } w-full md:inline md:w-auto md:mr-10`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:gap-8 md:mt-0    ">
            {[
              { to: '/', title: 'Main Page' },
              { to: '/product', title: 'Product' },
            ].map(({ to, title }, id) => (
              <li key={id}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 pl-3 pr-4 text-white hover:text-neutral-300 rounded md:p-0'
                      : 'block py-2 pl-3 pr-4 text-neutral-400  hover:text-neutral-300 rounded md:border-0 md:hover:text-neutral-200 md:p-0 '
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
