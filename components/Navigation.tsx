"use client"

import { NavigationList } from "@/constants"
import { usePathname } from "next/navigation"

export const NavigationComponent = () => {
  const pathname = usePathname()

  return (
    <nav className="breakout flex items-center justify-between h-20">
      <a href="/" className="font-bold text-2xl">
        Joseph De Leon
      </a>
      <ul className="flex gap-10">
        {NavigationList.map((list) => (
          <li key={list.name} className="relative">
            <a
              href={list.path}
              className={
                (list.name.toLowerCase() === "projects" &&
                  pathname.slice(1) === "") ||
                list.name.toLowerCase() === pathname.slice(1)
                  ? "text-sky-700 after:absolute after:translate-y-5 after:left-0 after:bg-sky-700 after:w-full after:h-0.5 font-semibold"
                  : "text-gray-700 after:absolute after:translate-y-5 after:left-0 after:bg-sky-700 after:w-0 after:hover:w-full after:h-0.5 after:duration-150 after:rounded-full after:transition-all after:ease-in-out hover:text-sky-700 font-semibold"
              }
            >
              {list.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
