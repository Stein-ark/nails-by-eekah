import Link from "next/link";
import { SERVICES } from "@/lib/site";
import Reveal from "./Reveal";

export default function ServicesPreview() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="label text-[0.65rem] font-medium text-mocha">services</p>
            <h2 className="mt-4 font-display text-4xl font-light lowercase leading-tight text-ink sm:text-5xl">
              a short, considered menu.
            </h2>
          </div>
          <Link href="/services" className="border-b border-ink pb-1 text-sm lowercase text-ink transition-opacity hover:opacity-60">
            all services
          </Link>
        </Reveal>

        <div className="mt-14 border-t hairline">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={i * 70} as="article">
              <div className="grid gap-4 border-b hairline py-8 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-10">
                <span className="font-display text-sm font-light text-sand">{service.index}</span>
                <div>
                  <h3 className="font-display text-2xl font-light lowercase text-ink">{service.name}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">{service.blurb}</p>
                </div>
                <span className="font-display text-xl font-light lowercase text-ink">from ${service.from}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
