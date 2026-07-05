import { SITE } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <Reveal>
        <div className="mx-auto max-w-6xl bg-ink px-8 py-20 text-center lg:px-16 lg:py-28">
          <p className="label text-[0.65rem] font-medium text-sand">{SITE.tagline}</p>
          <h2 className="mx-auto mt-6 max-w-xl font-display text-4xl font-light lowercase leading-tight text-oat sm:text-5xl">
            book a quiet hour.
          </h2>
          <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-oat/70">
            appointments are limited and unhurried. reserve yours on fresha.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href={SITE.fresha}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-oat px-8 py-4 text-sm lowercase text-ink transition-opacity hover:opacity-85"
            >
              book on fresha
            </a>
            <span className="text-sm lowercase text-oat/60">{SITE.address}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
