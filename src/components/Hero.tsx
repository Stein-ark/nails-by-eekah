import Link from "next/link";
import { SITE } from "@/lib/site";
import { HERO } from "@/lib/images";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="px-6 pt-32 pb-16 lg:px-10 lg:pt-44">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Reveal>
              <p className="label text-[0.65rem] font-medium text-mocha">
                nail studio · {SITE.area}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-6xl font-light lowercase leading-[1.02] tracking-tight text-ink sm:text-7xl">
                the nails are
                <br />
                the only <span className="italic">colour.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-ink-soft">
                a quiet, neutral nail studio in malton. nude, oat, mocha, milk —
                clean sets and soft gel done with a light, precise hand. less,
                but better.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <a
                  href={SITE.fresha}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ink px-8 py-4 text-sm lowercase text-oat transition-opacity hover:opacity-85"
                >
                  book on fresha
                </a>
                <Link href="/gallery" className="border-b border-ink pb-1 text-sm lowercase text-ink transition-opacity hover:opacity-60">
                  view the work
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {HERO.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={HERO.poster}
                  aria-label={HERO.alt}
                  className="h-full w-full object-cover"
                >
                  <source src={HERO.src} type="video/mp4" />
                </video>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={HERO.src} alt={HERO.alt} className="h-full w-full object-cover" />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
