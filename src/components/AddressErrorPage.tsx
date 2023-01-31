import React from 'react';
import { Link } from 'react-router-dom';

const AddressErrorPage = (address: any) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-6xl font-bold tracking-wide mb-10">oops!</div>
      <div className="text-center text-xs xs:text-sm mx-3 sm:text-xl mb-7">{`"${address.address}" is not a valid address`}</div>
      <Link to={`/`}>
        <button
          type="button"
          className="flex justify-center items-center text-white tracking-widest bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-base px-6 py-3.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          BACK TO HOME
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default AddressErrorPage;
