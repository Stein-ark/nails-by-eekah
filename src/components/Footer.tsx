import Link from "next/link";
import { TbBrandInstagram } from "react-icons/tb";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-[2] border-t hairline bg-oat-deep px-6 py-16 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-light lowercase text-ink">nails by eekah</p>
          <p className="mt-2 text-sm italic text-ink-soft">{SITE.tagline}</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
            considered nail sets, gel and extensions in the softest neutral tones.
            malton, mississauga — by appointment.
          </p>
        </div>

        <div>
          <p className="label text-[0.6rem] font-medium text-mocha">explore</p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm lowercase text-ink-soft transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label text-[0.6rem] font-medium text-mocha">find eekah</p>
          <ul className="mt-5 space-y-3 text-sm text-ink-soft">
            <li>
              <a href={SITE.fresha} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                book on fresha
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-ink">
                <TbBrandInstagram /> {SITE.instagramHandle}
              </a>
            </li>
            <li>{SITE.address}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t hairline pt-8 text-xs lowercase text-ink-soft sm:flex-row">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <p>{SITE.location} · by appointment</p>
      </div>
    </footer>
  );
}
