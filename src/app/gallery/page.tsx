import type { Metadata } from "next";
import { GALLERY } from "@/lib/images";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "gallery — nails by eekah",
  description: "soft, neutral nail work by eekah in mississauga.",
};

export default function GalleryPage() {
  return (
    <>
      <header className="px-6 pt-36 pb-12 lg:px-10 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="label text-[0.65rem] font-medium text-mocha">the work</p>
            <h1 className="mt-6 max-w-2xl font-display text-6xl font-light lowercase leading-[1.02] text-ink">
              a quiet portfolio.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink-soft">
              placeholder imagery for now — eekah&apos;s own work will live here soon.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 80} className={img.span ?? ""}>
              <figure className="group relative h-full min-h-64 overflow-hidden">
                <Media
                  item={img}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <figcaption className="absolute bottom-4 left-4 text-sm lowercase text-oat drop-shadow">
                  {img.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
