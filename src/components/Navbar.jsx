import { Link } from "react-router";
import { IconMenuDeep } from "@tabler/icons-react";

import chryslerSticker from "../assets/Chrysler-Sticker.png";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const detailsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        detailsRef.current.open = false;
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-base-100 shadow-md">
      <div className="max-w-full p-2 md:mx-4">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center gap-4">
            <Link to="/">
              <img
                className="h-24 w-24 shrink-0 object-contain sm:h-32 sm:w-32 md:h-[136px] md:w-[136px]"
                src={chryslerSticker}
              />
            </Link>
            <h1 className="font-serif text-xl font-medium sm:text-2xl md:text-3xl">
              Chrysler Restorers Club NZ
            </h1>

            <div className="hidden grow items-center justify-end gap-2 md:gap-4 lg:flex">
              <Link
                to="/"
                className="btn btn-ghost btn-lg rounded-xl font-serif"
              >
                Home
              </Link>

              <Link
                to="/contact"
                className="btn btn-ghost btn-lg rounded-xl font-serif"
              >
                Contact Us
              </Link>
            </div>

            <details
              ref={detailsRef}
              className="dropdown dropdown-end dropdown-bottom flex grow items-center justify-end lg:hidden"
            >
              <summary className="btn btn-ghost rounded-xl">
                <IconMenuDeep />
              </summary>
              <ul className="z-1 menu dropdown-content gap-2 rounded-2xl bg-base-100 shadow-md">
                <li>
                  <Link
                    to="/"
                    className="btn btn-ghost btn-lg rounded-xl font-serif"
                    onClick={() => (detailsRef.current.open = false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="btn btn-ghost btn-lg rounded-xl font-serif"
                    onClick={() => (detailsRef.current.open = false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
