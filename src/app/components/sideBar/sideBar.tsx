import React from "react";
import { ChevronUp, ChevronDown } from "react-feather";
import "./sideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar-container flex flex-col gap-10">
      <div className="title-container flex">
        <div className="title-logo flex flex-col items-center justify-center mr-5">
          <div className="flex">
            <div className="logo">
              <ChevronUp width={10} height={10} />
            </div>
            <div className="logo">
              <ChevronUp width={10} height={10} />
            </div>
          </div>
          <div className="logo">
            <ChevronDown width={10} height={10} />
          </div>
        </div>
        <span className="font-medium">Hi, AltWorld</span>
      </div>
      <div className="underLine"></div>
      <div className="dashboard flex items-center">
        <div className="dashboard-logo mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="20px"
            height="20px"
            fill="#1ec3b3"
          >
            <path d="M 32 3 L 1 28 L 1.4921875 28.654297 C 2.8591875 30.477297 5.4694688 30.791703 7.2304688 29.345703 L 32 9 L 56.769531 29.345703 C 58.530531 30.791703 61.140812 30.477297 62.507812 28.654297 L 63 28 L 54 20.742188 L 54 8 L 45 8 L 45 13.484375 L 32 3 z M 32 13 L 8 32 L 8 56 L 56 56 L 56 35 L 32 13 z M 26 34 L 38 34 L 38 52 L 26 52 L 26 34 z" />
          </svg>
        </div>
        <span className="font-medium">Dashbord</span>
      </div>
      <div className="add-assignment-container">
        <div className="add">+</div>
        <span className="new-assignment">New Assignment?</span> <br />
        <span className="new-assignment-para">
          Select from pre-defined questions to have a quick turnaround.
        </span>
        <button className="btn-new-assignment">Create New Assignment</button>
      </div>
    </div>
  );
};

export default SideBar;
