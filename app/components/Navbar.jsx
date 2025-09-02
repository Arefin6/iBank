"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/images/Logo.png";
import { ChevronDown } from "lucide-react";

const links = [
  { href: "#", label: "Home", iDown: false },
  { href: "#", label: "Products", iDown: true },
  { href: "#", label: "Resources", iDown: true },
  { href: "#", label: "Pricing", iDown: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full text-base font-semibold bg-[#5B21B6] text-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Untitled UI" className="h-6 w-auto" />
            <Link href="#" className="flex items-baseline gap-1 font-semibold">
              <span className="text-white/90 text-lg">Untitled</span>
              <span className="text-white/90 text-lg">UI</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-8 ml-12">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-white"
                >
                  {l.label}
                  {l.iDown && (
                    <ChevronDown className="inline-block ml-1 mb-1" size={16} />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Push login/signup to the right */}
          <div className="ml-auto hidden md:flex items-center gap-8">
            <Link href="#" className="transition-colors hover:text-white">
              Log in
            </Link>
            <Link
              href="#"
              className="rounded-md bg-[#7F56D9] px-4 py-2 transition hover:bg-[#6C3CF6]"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-auto md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-white/15 hover:bg-white/5"
          >
            <span
              className={`block h-0.5 w-5 bg-white transition-all ${
                open ? "translate-y-0.5 rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-all ${
                open ? "-translate-y-0.5 -rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden">
            <div className="mt-2 rounded-lg border border-white/10 bg-black/20 backdrop-blur p-3">
              <ul className="flex flex-col divide-y divide-white/10">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="block px-3 py-2 text-white/90 hover:bg-white/10 rounded-md"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex gap-2">
                <Link
                  href="#"
                  className="flex-1 rounded-md px-3 py-2 text-center text-white/90 ring-1 ring-white/20 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="#"
                  className="flex-1 rounded-md bg-white px-3 py-2 text-center font-semibold text-[#6C3CF6] hover:opacity-90"
                  onClick={() => setOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
