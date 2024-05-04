import React from "react";
import Link from "next/link";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="navigation-container">
        <Link href="" className="gray-link" >Pages</Link> / <Link href="">Assignment</Link>
      </div>
      <div className="department-heading">Sales BDE</div>
    </div>
  );
};

export default Header;
