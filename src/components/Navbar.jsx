import { IconPointFilled } from "@tabler/icons-react";

import { Link } from "react-router";

import chryslerSticker from "../assets/Chrysler-Sticker.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-base-100 shadow-md">
      <div className="max-w-full p-2 md:mx-4">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center gap-4">
            <Link to="/">
              <img
                className="h-24 w-24 md:h-[136px] md:w-[136px]"
                src={chryslerSticker}
              />
            </Link>
            <h1 className="text-xl md:text-3xl">Chrysler Restorers Club NZ</h1>
            <div className="flex grow items-center justify-end gap-2 md:gap-4">
              <Link to="/" className="btn btn-ghost btn-lg rounded-xl">
                Home
              </Link>
              <IconPointFilled className="h-2 md:h-4" />
              <Link
                to="/contact"
                className="w-28 rounded-xl bg-red-900 p-4 text-center text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
