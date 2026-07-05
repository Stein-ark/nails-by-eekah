import type { GalleryImage } from "@/lib/images";

/**
 * Renders a gallery item as either a photo or an autoplaying, muted,
 * looping video reel — so both share the same framed containers.
 */
export default function Media({
  item,
  className = "",
}: {
  item: GalleryImage;
  className?: string;
}) {
  if (item.type === "video") {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={item.poster}
        aria-label={item.alt}
        className={className}
      >
        <source src={item.src} type="video/mp4" />
      </video>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={item.src} alt={item.alt} className={className} />
  );
}
