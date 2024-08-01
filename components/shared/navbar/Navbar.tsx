import Link from "next/link";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faBell,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light700_dark300 fixed z-50 w-full gap-5 p-6 sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <p className="text-dark100_light500 text-xl">
          Min<span className="text-primary-100">gle</span>
        </p>
      </Link>
      <div className="flex w-auto">
        <Link href="/" className="mr-20 ">
          <FontAwesomeIcon icon={faHouse} className="text-xl text-light-500 " />
        </Link>
        <Link href="/" className="mr-20">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-xl text-light-500 "
          />
        </Link>
        <Link href="/" className="mr-20">
          <FontAwesomeIcon icon={faBell} className="text-xl text-light-500 " />
        </Link>
        <Link href="/" className="">
          <FontAwesomeIcon
            icon={faMessage}
            className="text-xl text-light-500 "
          />
        </Link>
      </div>
      <div className="flex-between w-auto">
        <Theme />
        <Link href="/" className="mr-5 text-primary-100 ">
          <p>Huỳnh Nguyễn</p>
        </Link>
        <Link href="/" className="">
          <Image
            src="/path/to/avatar.jpg"
            alt="Avatar"
            width={25}
            height={25}
            className="rounded-full"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
