import Link from "next/link";
import { GALLERY } from "@/lib/images";
import Media from "./Media";
import Reveal from "./Reveal";

export default function GalleryPreview() {
  const preview = GALLERY.slice(0, 3);

  return (
    <section className="bg-oat-deep px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-[0.65rem] font-medium text-mocha">the work</p>
            <h2 className="mt-4 font-display text-4xl font-light lowercase leading-tight text-ink sm:text-5xl">
              soft, neutral, considered.
            </h2>
          </div>
          <Link href="/gallery" className="border-b border-ink pb-1 text-sm lowercase text-ink transition-opacity hover:opacity-60">
            full gallery
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {preview.map((img, i) => (
            <Reveal key={img.src} delay={i * 80}>
              <figure className="group relative aspect-[4/5] overflow-hidden">
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
      </div>
    </section>
  );
}
