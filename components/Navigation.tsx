"use client"

import { NavigationList } from "@/utils/constants"
import { useWindowDimensions } from "@/utils/functions/"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export const NavigationComponent = () => {
  const PLACEHOLDER = "zeph."
  const BREAKPOINT = 768

  const pathname = usePathname()
  const windowDimensions = useWindowDimensions()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (windowDimensions.width && windowDimensions.width > BREAKPOINT) {
      setIsMenuOpen(false)
    }
  }, [windowDimensions])

  return (
    <nav className="breakout flex items-center justify-between h-20 z-50">
      <Link href="/" className="font-semibold text-3xl text-sky-900 z-10">
        {PLACEHOLDER}
      </Link>
      <>
        {/**
         * Navigation Menu
         * */}
        <button
          type="button"
          className="md:hidden transition-all duration-500 ease-linear overflow-hidden group relative grid place-items-center size-6 z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`-translate-x-8 top-1 group-hover:-translate-x-0 absolute bg-black w-full h-[3px] after:absolute after:inset-0 after:w-full after:h-[3px] after:bg-black after:translate-x-8 transform duration-500 ${
              isMenuOpen ? "top-auto -rotate-45 !-translate-x-0" : ""
            }`}
          />
          <span
            className={`-translate-x-8 group-hover:-translate-x-0 absolute bg-black w-full h-[3px] after:absolute after:inset-0 after:w-full after:h-[3px] after:bg-black after:translate-x-8 transform duration-500 ${
              isMenuOpen ? "!translate-x-8" : "delay-[50ms]"
            }`}
          />
          <span
            className={`-translate-x-8 bottom-1 group-hover:-translate-x-0 absolute bg-black w-full h-[3px] after:absolute after:inset-0 after:w-full after:h-[3px] after:bg-black after:translate-x-8 transform duration-500 ${
              isMenuOpen ? "bottom-auto rotate-45 !-translate-x-0" : "delay-100"
            }`}
          />
        </button>
        {/**
         * Navigation Card
         * */}
        <section
          className={`md:h-[inherit] md:grid-rows-[1fr] md:max-w-[1200px] md:inset-auto absolute top-0 left-0 h-dvh w-full grid transform duration-500 ease-linear ${
            isMenuOpen ? "bg-black grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="bg-white rounded-b-3xl md:rounded-none md:size-full w-full h-4/5 overflow-hidden px-4">
            <ul className="md:mt-0 md:flex-row md:gap-5 md:px-4 md:h-full md:items-center md:justify-end mt-28 flex flex-col gap-2">
              {NavigationList.map((list, index) => (
                <li
                  key={list.name}
                  className={`md:!opacity-100 md:!translate-x-0  md:text-3xl text-5xl font-semibold ${
                    isMenuOpen
                      ? "animate-open-slide-right"
                      : "animate-close-slide-left"
                  }`}
                  style={{
                    animationDelay: `${
                      isMenuOpen
                        ? 50 * index
                        : 50 * (NavigationList.length - 1 - index)
                    }ms`,
                  }}
                >
                  <Link
                    className="hover:opacity-60 transition-opacity"
                    href={list.path}
                  >
                    {list.name.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </>
    </nav>
  )
}
