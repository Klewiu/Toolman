import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 items-center h-24 max-w-[1240px] mx-auto px-4 text-white border-t-[1px] invisible md:visible text-sm">
      <div className="container flex justify-between">
        <ul className="flex item items-center">
          <li className="p-4">
            <Link to="home" smooth={true} duration={400}>
              Link 1
            </Link>
          </li>
          <li className="px-4">
            <Link to="about" smooth={true} duration={400}>
              Link 2
            </Link>
          </li>
          <li className="px-4">
            <Link to="skills" smooth={true} duration={400}>
              Link 3
            </Link>
          </li>
          <li className="px-4">
            <Link to="work" smooth={true} duration={400}>
              Link 4
            </Link>
          </li>
          </ul>
        <ul className="flex item items-center text-white text-xs"> © 2022 Toolman. All rights reserved. </ul>
      </div>
    </div>
  );
};

export default Footer;
