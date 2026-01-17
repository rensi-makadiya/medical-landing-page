import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/application", label: "Application" },
    { to: "/history", label: "History" }
  ];

  return (
    <header className="w-full sticky top-0 bg-blue-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="text-blue-950 font-bold text-3xl">
          E-<span>sheba</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg text-blue-950">
          {nav.map((curr, index) => (
            <li key={index}>
              <NavLink
                to={curr.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline"
                    : "hover:text-blue-600 hover:underline transition"
                }
              >
                {curr.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="text-lg text-blue-600 border border-blue-600 px-5 py-2 rounded-full hover:bg-blue-50 transition">
            Log in
          </button>
          <button className="text-lg text-white bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-blue-950"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-100 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg text-blue-950">
            {nav.map((curr, index) => (
              <li key={index}>
                <NavLink
                  to={curr.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 underline"
                      : "hover:text-blue-600 hover:underline transition"
                  }
                >
                  {curr.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-5">
            <button className="text-lg text-blue-600 border border-blue-600 py-2 rounded-full hover:bg-blue-50 transition">
              Log in
            </button>
            <button className="text-lg text-white bg-blue-600 py-2 rounded-full hover:bg-blue-700 transition">
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
