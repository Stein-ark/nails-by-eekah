// Real media from /public — eekah's own work.
// Photos are served as-is; videos autoplay muted + looping like reels.

export const HERO: {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
} = {
  type: "image",
  src: "/hero.jpg",
  alt: "leopard-print stiletto set with gold chains and cross charms",
};

export const ABOUT_PORTRAIT = {
  src: "/e3.jpg",
  alt: "leopard stiletto nails with gold detail",
};

export type GalleryImage = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  label: string;
  span?: string;
};

export const GALLERY: GalleryImage[] = [
  { type: "image", src: "/hero.jpg", alt: "leopard-print stiletto set with gold chains", label: "leopard luxe", span: "sm:row-span-2" },
  { type: "video", src: "/e1.mp4", poster: "/e1_poster.jpg", alt: "soft pink and white french set", label: "soft french" },
  { type: "image", src: "/e2.jpg", alt: "electric blue lightning coffin nails", label: "blue lightning" },
  { type: "image", src: "/e3.jpg", alt: "leopard stiletto with gold chains and charms", label: "gold chains", span: "sm:row-span-2" },
  { type: "image", src: "/e1_poster.jpg", alt: "pink and white french coffin nails", label: "pink french" },
];
