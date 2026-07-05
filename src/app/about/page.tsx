import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { ABOUT_PORTRAIT } from "@/lib/images";
import Reveal from "@/components/Reveal";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "about — nails by eekah",
  description: "the quiet philosophy behind nails by eekah — less, but better. a neutral nail studio in mississauga.",
};

const PRINCIPLES = [
  { k: "neutral only", v: "nude, oat, mocha, milk. the softest tones, so the nails read like an extension of you." },
  { k: "a light hand", v: "precise, unhurried, natural. nothing heavy, nothing loud, nothing overdone." },
  { k: "less, but better", v: "a short menu done properly beats a long one done in a rush. quality over everything." },
];

export default function AboutPage() {
  return (
    <>
      <header className="px-6 pt-36 pb-16 lg:px-10 lg:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <p className="label text-[0.65rem] font-medium text-mocha">about</p>
            <h1 className="mt-6 font-display text-6xl font-light lowercase leading-[1.02] text-ink">
              hi, i&apos;m eekah.
            </h1>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                i&apos;m a solo nail tech in malton, mississauga, with a quiet
                obsession: the perfect neutral set. no brightness, no gradients,
                no noise — just clean, soft, considered nails.
              </p>
              <p>
                i keep my menu short and my appointments unhurried, so every set
                gets the same light, precise attention. the goal is simple —
                less, but better.
              </p>
            </div>
            <div className="mt-8 text-sm lowercase text-ink">{SITE.location} · by appointment</div>
          </Reveal>

          <Reveal delay={160}>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ABOUT_PORTRAIT.src} alt={ABOUT_PORTRAIT.alt} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </header>

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl border-t hairline md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.k} delay={i * 90} as="article">
              <div className={`px-2 py-10 md:px-8 ${i !== 0 ? "md:border-l hairline" : ""}`}>
                <h3 className="font-display text-2xl font-light lowercase text-ink">{p.k}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reviews />
      <CTA />
    </>
  );
}
