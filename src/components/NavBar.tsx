'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    return (
          <nav className="w-full flex justify-center gap-12 py-4 bg-platinum">
            <Link
              href="/"
              className={`relative tracking-wide text-sm transition-colors duration-200`}
            >
            Home
            {pathname === '/' && <div className="nav-red-dot-home"></div>}
          </Link>


          <Link
            href="/gallery"
            className={`relative tracking-wide text-sm transition-colors duration-200`}
          >
          Gallery{pathname === '/gallery' && <div className="nav-red-dot"></div>}
          </Link>

          <Link
            href="/about"
            className={`relative tracking-wide text-sm transition-colors duration-200`}
          >
            About
            {pathname === '/about' && <div className="nav-red-dot"></div>}
          </Link>
        </nav>
      );
}