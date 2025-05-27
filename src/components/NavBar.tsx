'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <header className="flex justify-center mt-4">
          <nav className="dslr-nav">
            <Link
              href="/"
              className={`dslr-link text-[17px] ${pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={`dslr-link text-[17px] ${pathname === '/gallery' ? 'active' : ''}`}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className={`dslr-link text-[17px] ${pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </nav>
        </header>
      );
}