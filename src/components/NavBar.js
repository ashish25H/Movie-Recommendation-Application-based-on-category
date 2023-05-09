import React from "react";
import heartImg from '../assets/images/icons8-favorite-48.png';
import tvImg from '../assets/images/icons8-tv-30.png';

function NavBar() {
  return <div>
    <nav className="flex justify-between bg-gray-700 py-3 px-3 sm:py-5 sm:px-10">
      <div>
        <p className="text-3xl font-semibold text-red-500" title="logo">Movieflex</p>
      </div>

  <div className="flex justify-center items-center">
    <img className="px-2 sm:px-4 hover:cursor-pointer" src={tvImg} alt="It is a tv image" title="Want to watch"/>
    <img className="px-2 w-[55px] sm:px-4 sm:w-[70px] hover:cursor-pointer" src={heartImg} alt="it is a heart image" title="Favorite"/>
  </div>
    </nav>
  </div>;
}

export default NavBar;
