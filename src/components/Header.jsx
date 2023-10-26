import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className=" mx-auto flex flex-wrap shadow px-3 py-1  flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-orange-500 mb-4 md:mb-0">
            <img
              className="w-36 h-24 object-cover"
              src="https://static.vecteezy.com/system/resources/previews/027/127/591/original/pokemon-logo-pokemon-icon-transparent-free-png.png"
              alt=""
            />
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-orange-500">Home</a>
            <a className="mr-5 hover:text-orange-500">About</a>
            <a className="mr-5 hover:text-orange-500">Pages</a>
            <a className="mr-5 hover:text-orange-500">Orders</a>
          </nav>


          <button className="inline-flex items-center bg-orange-100 border-0 py-1 px-3 focus:outline-none hover:bg-orange-200 rounded text-base mt-4 md:mt-0">
            Pock
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header
