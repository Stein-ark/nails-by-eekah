import type { Metadata } from "next";
import { SERVICES, SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "services — nails by eekah",
  description: "nail sets, gel and extensions in soft neutral tones. a short, considered menu by eekah in mississauga.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="px-6 pt-36 pb-16 lg:px-10 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="label text-[0.65rem] font-medium text-mocha">services</p>
            <h1 className="mt-6 max-w-2xl font-display text-6xl font-light lowercase leading-[1.02] text-ink">
              less, but better.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink-soft">
              a short menu, done properly. prices start from the figures shown and
              are confirmed in-studio based on length and shape.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-6xl border-t hairline">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={i * 70} as="article">
              <div className="grid gap-6 border-b hairline py-12 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-12">
                <span className="font-display text-sm font-light text-sand">{service.index}</span>
                <div>
                  <h2 className="font-display text-3xl font-light lowercase text-ink">{service.name}</h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">{service.blurb}</p>
                  <a
                    href={SITE.fresha}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block border-b border-ink pb-1 text-sm lowercase text-ink transition-opacity hover:opacity-60"
                  >
                    book this
                  </a>
                </div>
                <span className="font-display text-2xl font-light lowercase text-ink">from ${service.from}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
