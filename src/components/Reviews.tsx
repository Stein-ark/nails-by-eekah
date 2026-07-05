import { REVIEWS } from "@/lib/site";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-xl">
          <p className="label text-[0.65rem] font-medium text-mocha">kind words</p>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.quote} delay={i * 90} as="article">
              <figure className="flex h-full flex-col">
                <blockquote className="flex-1 font-display text-2xl font-light lowercase italic leading-relaxed text-ink">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t hairline pt-4 text-sm lowercase text-ink-soft">
                  {review.author} · {review.meta}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
