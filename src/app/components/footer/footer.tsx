import React from "react";
import "./footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between items-center footer-container">
      <p>@ 2024, ProfileScreener.com</p>
      <div className="flex gap-5">
        <Link href="">Contact Us</Link>
        <Link href="">Privacy</Link>
        <Link href="">terms</Link>
      </div>
    </div>
  );
};

export default Footer;
