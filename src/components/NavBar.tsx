import { useState } from "react";
import logo from "../assets/logo.svg";
import MenuIcon from "./MenuIcon";
import XIcon from "./XIcon";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex w-full min-w-[375px] items-center justify-between">
      {/* logo */}
      <img
        src={logo}
        alt="logo"
        className="ml-[16px] h-[28px] w-[45px] md:ml-0 md:h-[40px] md:w-[64px]"
      />

      {/* Navigation Links */}
      <ul className={"hidden gap-[40px] text-body text-gun-metal md:flex"}>
        <li className="hover:text-light-vermillion">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-light-vermillion">
          <a href="/">New</a>
        </li>
        <li className="hover:text-light-vermillion">
          <a href="/">Popular</a>
        </li>
        <li className="hover:text-light-vermillion">
          <a href="/">Trending</a>
        </li>
        <li className="hover:text-light-vermillion">
          <a href="/">Categories</a>
        </li>
      </ul>

      {/* Toggle Button, visible on small screens */}
      <div className="mr-[16px] md:hidden">
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </button>
      </div>
    </nav>
  );
}
