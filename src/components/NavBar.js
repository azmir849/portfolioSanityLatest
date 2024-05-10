import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import toggleButton from "../img/menu.png";
export default function Navbar() {
  return (
    <nav class='navbar sticky-top navbar-expand-lg navbar-black bg-black'>
      <div class='container'>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon' style={{ color: "red" }}>
            {" "}
            <img alt='' className='absolute object-cover' src={toggleButton} />
          </span>
        </button>

        <NavLink
          to='/'
          exact
          activeClassName='text-yellow-300'
          className='inflex-flex items-center py-3 px-3 mr-4 mt-2 ml-5 text-yellow-300 hover:text-green-800 text-4xl font-bold  tracking-widest '
        >
          AH Naeem
        </NavLink>
        <div class='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <NavLink
              to='/blog'
              activeClassName='text-yellow-300 bg-red-700'
              className='inline-flex items-center py-3 px-3 my-3 rounded text-yellow-300 font-bold hover:text-green-800'
            >
              My Projects
            </NavLink>
            {/* <NavLink
              activeClassName="text-red-100 bg-red-700"
             to="/project"
             className="inline-flex items-center py-3 px-3 my-3 rounded text-red-200 hover:text-green-800"
          >
             Projects
         </NavLink> */}
            <NavLink
              activeClassName='text-yellow-300 bg-red-700'
              to='/about'
              className='inline-flex items-center py-3 px-3 my-3 rounded text-yellow-300 font-bold hover:text-green-800'
            >
              About me!
            </NavLink>
          </ul>
          <form class='d-flex'>
            <SocialIcon
              url='https://github.com/azmir849'
              className='mr-4'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://www.linkedin.com/in/ah-naeem/'
              className='mr-4'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://drive.google.com/file/d/1-_sqnTaZiXxlIAqGvPllHX7_V5ZvyrRa/view'
              className='mr-4'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
