import React from "react";
import logo from "../../img/mh_logo.png";

//  #005E83 - Turqoise
// #8C2D2D - dar red
// #B9573E - medium red / orange
// #C98531 - lighter orange
// #E8Af40 - lightest Orang / yellow color

const Header = () => {
  return (
    <header className="border-0 min-h-[20%] shadow-md">
      <div className="flex w-9/12 mx-auto h-1/4 justify-between">
        <div className="flex">
          <a href="https://monumenthealth.net/">
            <img src={logo} className="h-24 w-32" alt="monument-health" />
          </a>
        </div>
        <nav className="w-full mt-auto mb-auto mx-0">
          <ol className="text-center flex justify-around">
            <li>
              <a href="https://monumenthealth.net/monument-health-insurance-plans/">
                Our Plans
              </a>
            </li>
            <li>
              <a href="https://monumenthealth.net/provider-directory/">
                Providers
              </a>
            </li>
            <li>
              <a href="https://monumenthealth.net/about-us/"> About Us</a>
            </li>
            <li>
              <a href="https://monumenthealth.net/monumenthealth-blog/">Blog</a>
            </li>
            <li>
              <a href="https://monumenthealth.net/about-good-life-wellness-solutions/">
                Good Life Wellness Solutions
              </a>
            </li>
            <li>
              <a href="https://monumenthealth.net/contact-us/">Contact Us</a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
