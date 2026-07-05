"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbMenu2, TbX } from "react-icons/tb";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b hairline bg-oat/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="font-display text-xl font-light lowercase tracking-tight text-ink" aria-label="nails by eekah — home">
          nails by eekah
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm lowercase transition-colors ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={SITE.fresha}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-ink pb-1 text-sm lowercase text-ink transition-opacity hover:opacity-60"
          >
            book
          </a>
        </div>

        <button onClick={() => setOpen(true)} className="text-ink md:hidden" aria-label="open menu">
          <TbMenu2 className="text-2xl" strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/25 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`fixed right-0 top-0 flex h-dvh w-[82%] max-w-xs flex-col border-l hairline bg-paper transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-20 items-center justify-between border-b hairline px-6">
            <span className="font-display text-lg font-light lowercase text-ink">nails by eekah</span>
            <button onClick={() => setOpen(false)} className="text-ink-soft hover:text-ink" aria-label="close menu">
              <TbX className="text-2xl" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b hairline py-5 font-display text-2xl font-light lowercase text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-6">
            <a
              href={SITE.fresha}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center bg-ink px-6 py-4 text-sm lowercase text-oat"
            >
              book on fresha
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
