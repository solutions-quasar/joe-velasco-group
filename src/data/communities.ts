export interface Community {
  id: string;
  name: string;
  region: string;
  description: string;
  avgPrice: string;
  image: string;
  slug: string;
  span?: string;
}

export const COMMUNITIES: Community[] = [
  {
    id: "los-gatos",
    name: "Los Gatos",
    region: "Silicon Valley South",
    description: "Nestled at the base of the Santa Cruz Mountains, known for historic charm, premier dining, and top-tier schools.",
    avgPrice: "$3.4M+",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    slug: "los-gatos",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: "palo-alto",
    name: "Palo Alto",
    region: "Silicon Valley North",
    description: "The global epicenter of technology and innovation, home to Stanford University and tree-lined luxury enclaves.",
    avgPrice: "$4.2M+",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    slug: "palo-alto",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "atherton",
    name: "Atherton",
    region: "The Peninsula",
    description: "America's most exclusive zip code featuring multi-acre gated estates, ultimate privacy, and legacy properties.",
    avgPrice: "$8.5M+",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    slug: "atherton",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "saratoga",
    name: "Saratoga",
    region: "Silicon Valley Foothills",
    description: "Serene foothill estates, Montalvo Arts Center, Michelin-starred cuisine, and award-winning school districts.",
    avgPrice: "$3.8M+",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    slug: "saratoga",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "los-altos",
    name: "Los Altos",
    region: "Silicon Valley Core",
    description: "Spacious country-club living, vibrant village downtown, and architectural masterpieces on generous parcels.",
    avgPrice: "$4.5M+",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    slug: "los-altos",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "menlo-park",
    name: "Menlo Park",
    region: "The Peninsula",
    description: "Vibrant Silicon Valley tech capital adjacent to Sand Hill Road venture hubs, featuring historic and modern estates.",
    avgPrice: "$3.6M+",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
    slug: "menlo-park",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "woodside",
    name: "Woodside",
    region: "The Peninsula Redwoods",
    description: "Equestrian sanctuary and redwood-clad estates offering discreet prestige, pristine nature, and privacy.",
    avgPrice: "$5.2M+",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    slug: "woodside",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "cupertino",
    name: "Cupertino",
    region: "Silicon Valley Core",
    description: "World headquarters of Apple Inc., boasting nationally top-ranked schools and sought-after foothill residences.",
    avgPrice: "$3.1M+",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    slug: "cupertino",
    span: "md:col-span-2 md:row-span-1"
  }
];
