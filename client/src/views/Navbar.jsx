import React from "react";
import { Link } from 'react-router-dom';


export default function Navbar() {

  return (
    <header className="bg-indigo-200 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <Link to="/#about" className="ml-3 text-xl">
            Heartland Property Solutions
          </Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <Link to="/#portfolio" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link to="/#portfolio" className="mr-5 hover:text-white">
            Properties
          </Link>
          <Link to="/#resume" className="mr-5 hover:text-white">
            Contact
          </Link>
          <Link to="/#references" className="mr-5 hover:text-white">
            About
          </Link>
          <Link to="/#references" className="mr-5 hover:text-white">
            Login
          </Link>
        </nav>
       
      </div>
    </header>
  );
}

