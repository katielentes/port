"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { themeChange } from "theme-change";
import { Moon, Sun, Menu } from "react-feather";

const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  const storedTheme =
    typeof window !== "undefined" &&
    window.localStorage &&
    localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme);

  const pathname = usePathname(); // Get the router object

  // Helper function to determine if a link should be bold
  const isLinkActive = (href: string) => {
    console.log(pathname);
    return pathname === href ? "font-bold" : "";
  };

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Katie Lentes
        </Link>
      </div>

      {/* Hamburger menu for small screens */}
      <div className="flex-none md:hidden dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0} className="btn btn-ghost text-xl">
          <Menu />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

      {/* List items */}
      <div className="hidden md:flex md:space-x-4 ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/projects">
              {" "}
              <a className={isLinkActive("/projects")}>Projects</a>
            </Link>
          </li>
          <li>
            <a>Resume</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      {/* Theme toggle */}
      <div className="flex-none pr-4">
        {theme === "coffee" ? (
          <button
            data-set-theme="valentine"
            data-act-class="ACTIVECLASS"
            onClick={() => setTheme("valentine")}
          >
            <Sun />
          </button>
        ) : (
          <button
            data-set-theme="coffee"
            data-act-class="ACTIVECLASS"
            onClick={() => setTheme("coffee")}
          >
            <Moon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
