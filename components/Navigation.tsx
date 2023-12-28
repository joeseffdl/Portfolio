"use client";

import { NavigationList } from "@/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const NavigationComponent = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="breakout relative flex items-center justify-between h-24">
      <a href="/" className="font-bold text-2xl text-sky-700">
        Joseph De Leon
      </a>
      <div className="md:hidden flex items-center justify-center h-full">
        <button
          type="button"
          className="group relative flex  justify-center items-center w-8 h-8 cursor-pointer "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`absolute w-5 h-0.5 rounded-full bg-black transition-all transform group-hover:bg-sky-700  ${
              isMenuOpen
                ? "-rotate-45 translate-y-0"
                : "group-hover:-translate-y-[7px] -translate-y-1.5"
            }`}
          />
          <span
            className={`w-5 h-0.5 rounded-full bg-black transition-all group-hover:bg-sky-700 ${
              isMenuOpen
                ? "translate-x-6 bg-transparent group-hover:bg-transparent"
                : "translate-x-0"
            }`}
          />
          <span
            className={`absolute w-5 h-0.5 rounded-full bg-black transition-all transform group-hover:bg-sky-700  ${
              isMenuOpen
                ? "rotate-45 translate-y-0"
                : "group-hover:translate-y-[7px] translate-y-1.5"
            }`}
          />
        </button>
      </div>
      <ul
        className={`md:flex gap-10 ${
          isMenuOpen
            ? "absolute flex flex-col justify-center top-24 p-5 w-screen h-[400px] bg-white border-y-4 border-sky-700 -left-4"
            : "hidden"
        }`}
      >
        {NavigationList.map((list) => (
          <li key={list.name} className="relative w-fit">
            <a
              href={list.path}
              className={`
              ${
                isMenuOpen
                  ? (list.name.toLowerCase() === "projects" &&
                      pathname.slice(1) === "") ||
                    list.name.toLowerCase() === pathname.slice(1)
                    ? "text-sky-700 text-6xl after:absolute after:translate-y-16 after:left-0 after:bg-sky-700 after:w-full after:h-0.5 font-semibold"
                    : "text-gray-700 text-6xl after:absolute after:translate-y-16 after:left-0 after:bg-sky-700 after:w-0 after:hover:w-full after:h-0.5 after:duration-150 after:rounded-full after:transition-all after:ease-in-out hover:text-sky-700 font-semibold"
                  : (list.name.toLowerCase() === "projects" &&
                      pathname.slice(1) === "") ||
                    list.name.toLowerCase() === pathname.slice(1)
                  ? "text-sky-700 after:absolute after:translate-y-5 after:left-0 after:bg-sky-700 after:w-full after:h-0.5 font-semibold"
                  : "text-gray-700 after:absolute after:translate-y-5 after:left-0 after:bg-sky-700 after:w-0 after:hover:w-full after:h-0.5 after:duration-150 after:rounded-full after:transition-all after:ease-in-out hover:text-sky-700 font-semibold"
              }`}
            >
              {list.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
};
