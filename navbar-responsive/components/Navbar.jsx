import { useState } from "react";
import { HamOption } from "./HamOption";

export function Navbar() {
  const [opt, setOpt] = useState(false);
  let index = 0;
  const links = [
    { link: "#", name: "Home" },
    { link: "#", name: "About" },
    { link: "#", name: "Socials" },
  ];

  return (
    <div className="relative">
      {/* The Navbar */}
      <div className="flex h-[10dvh] justify-between items-center border border-neutral-300 shadow-2xs rounded-4xl px-5">
        <div className="lg:text-xl font-medium">NOTHING</div>
        <div onClick={() => setOpt(!opt)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 lg:hidden"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>
        <div className="space-x-8 hidden lg:block">
          {links.map((ele) => (
            <a
              className="hover:text-neutral-600 transition duration-300"
              href={ele.link}
              key={index++}
            >
              {ele.name}
            </a>
          ))}
        </div>
      </div>

      {/* Hamburger Options */}
      <HamOption opt={opt} links={links}></HamOption>
    </div>
  );
}
