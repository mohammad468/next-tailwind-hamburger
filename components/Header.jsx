import React, { useEffect, useState } from "react";

//hamburger menu
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const openHandler = () => {
    console.log(isOpen);
  };

  useEffect(() => {
    openHandler();
  }, [isOpen]);

  return (
    <header className="relative flex w-full items-center justify-between border border-blue-500 bg-blue-100">
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <h1 className="self-center">Hello Header</h1>
      <h1></h1>
    </header>
  );
};

export default Header;
