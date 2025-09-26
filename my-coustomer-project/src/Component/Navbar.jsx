import React from 'react';

const Navbar = () => {
    return (
<div className="navbar bg-base-100 shadow-sm px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-[24px] leading-[26px] text-[#130B2D] font-inter">
  <span className="font-bold">CS</span>
  <span className="font-normal ml-1">— Ticket System</span>
</a>
  </div>
  <div className="navbar-end">
    <ul className="menu menu-horizontal text-sm hidden lg:flex">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
  <a className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md ml-2">
  + New Ticket
</a>
  </div>
</div>


  
    );
};

export default Navbar;