import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-black shadow-sm bg-opacity-30">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-purple-600">
          DG
        </div>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          <li>
            <a
              href="#books"
              className="px-4 py-2 rounded-full text-white transition"
            >
              Books
            </a>
          </li>

          <li>
            <a
              href="#author"
              className="px-4 py-2 rounded-full text-white hover:bg-purple-100 hover:text-purple-700 transition"
            >
              Author
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col mt-4 gap-2 md:hidden">
          <li>
            <a
              href="#books"
              className="block px-4 py-2 rounded-full text-white hover:bg-purple-100"
            >
              Books
            </a>
          </li>

          <li>
            <a
              href="#author"
              className="block px-4 py-2 rounded-full text-white hover:bg-purple-100"
            >
              Author
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}