import React, { useState } from "react";

// icon
import { MdArrowBack } from "react-icons/md";

const LeftNav = () => {
  const [minimize, setMinimize] = useState(false);
  const [showMob, setShowMob] = useState(false);

  const minimizeHandler = () => {
    setMinimize(!minimize);
  };

  return (
    <nav
      className={`relative hidden border border-red-500 bg-red-100 transition-all md:block ${
        minimize ? "md:w-36" : "md:w-96"
      }`}
    >
      <button
        className="absolute right-0 top-0 w-7 self-end bg-slate-900 text-center"
        onClick={minimizeHandler}
      >
        <MdArrowBack className="text-2xl text-white" />
      </button>
      <h1 className="text-center">Left Nav</h1>
      <h1 className="text-center">Left Nav</h1>
      <h1 className="text-center">Left Nav</h1>
      <h1 className="text-center">Left Nav</h1>
      <h1 className="text-center">Left Nav</h1>
      <h1 className="text-center">Left Nav</h1>
      <h1 className="text-center">Left Nav</h1>
      <h1 className="text-center">Left Nav</h1>
    </nav>
  );
};

export default LeftNav;
