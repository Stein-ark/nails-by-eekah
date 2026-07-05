// Central config for nails by eekah. Lowercase, understated brand voice.
export const SITE = {
  name: "nails by eekah",
  owner: "eekah",
  tagline: "less, but better",
  fresha: "https://www.fresha.com/", // TODO: replace with exact Fresha booking URL
  instagram: "https://www.instagram.com/",
  instagramHandle: "@nailsbyeekah",
  location: "malton, mississauga",
  address: "malton · mississauga, on",
  area: "malton · mississauga",
} as const;

export const NAV_LINKS = [
  { label: "home", href: "/" },
  { label: "services", href: "/services" },
  { label: "gallery", href: "/gallery" },
  { label: "about", href: "/about" },
] as const;

export type Service = {
  index: string;
  name: string;
  blurb: string;
  from: string;
};

export const SERVICES: Service[] = [
  {
    index: "01",
    name: "nail sets",
    blurb:
      "a complete, considered set in the softest neutral tones — nude, oat, mocha, milk. clean, even, quietly luxurious.",
    from: "45",
  },
  {
    index: "02",
    name: "gel",
    blurb:
      "long-wearing gel with a natural, barely-there finish. the kind of manicure that looks like your nails, only better.",
    from: "40",
  },
  {
    index: "03",
    name: "extensions",
    blurb:
      "lightweight extensions sculpted to a natural length and shape. understated strength — nothing loud, nothing heavy.",
    from: "60",
  },
];

export type Review = {
  quote: string;
  author: string;
  meta: string;
};

export const REVIEWS: Review[] = [
  {
    quote: "the most natural, clean set i've ever had. eekah has such a light, precise hand.",
    author: "fresha client",
    meta: "gel · nail set",
  },
  {
    quote: "calm, quiet, unhurried. i left with the softest neutral nails and a completely reset mind.",
    author: "fresha client",
    meta: "extensions",
  },
  {
    quote: "less really is more here. everything is considered. i won't go anywhere else.",
    author: "fresha client",
    meta: "nail set",
  },
];
