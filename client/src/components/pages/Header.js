import React from "react";
import logo from "../../img/mh_logo.png";

//  #005E83 - Turqoise
// #8C2D2D - dar red
// #B9573E - medium red / orange
// #C98531 - lighter orange
// #E8Af40 - lightest Orang / yellow color

const Header = () => {
  return (
    <header className="bg-gray-300">
      <div className="flex w-9/12 mx-auto justify-between">
        <div className="flex">
          <img src={logo} className="h-24 w-32" alt="monument-health" />
        </div>
        <nav className="w-full mt-auto mb-auto mx-0">
          <ol className="text-center flex justify-around">
            <li>Our Plans</li>
            <li>Providers</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Good Life Wellness Solutions</li>
            <li>Contact Us</li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
