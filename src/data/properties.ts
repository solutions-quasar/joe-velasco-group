export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  status: "Active" | "Pending" | "Just Sold" | "Exclusive";
  image: string;
  description: string;
  featured: boolean;
  highlights: string[];
}

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: "118-dover-st",
    title: "Modern Los Gatos Architectural Estate",
    address: "118 Dover Street",
    city: "Los Gatos",
    state: "CA",
    zip: "95032",
    price: 5895000,
    beds: 5,
    baths: 7,
    sqft: 5937,
    status: "Active",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    description: "An extraordinary modern architectural statement in prime Los Gatos featuring soaring ceiling volumes, seamless indoor-outdoor wine country flow, infinity-edge pool, and bespoke millwork throughout.",
    featured: true,
    highlights: ["Custom Wine Room", "Chef's Scullery", "Zero-Edge Heated Pool", "Smart Home Automation"]
  },
  {
    id: "1720-jasper-highlands",
    title: "The Ridgeline Contemporary Sanctuary",
    address: "1720 Jasper Highlands Drive",
    city: "Morgan Hill / Silicon Valley Foothills",
    state: "CA",
    zip: "95037",
    price: 3495000,
    beds: 6,
    baths: 7,
    sqft: 6450,
    status: "Active",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    description: "Perched majestically with panoramic valley vistas, this grand estate offers resort-style outdoor living, dual primary suites, private executive wing, and serene private grounds.",
    featured: true,
    highlights: ["Panoramic Valley Views", "Resort Loggia", "Detached Guest House", "Solar & Battery Storage"]
  },
  {
    id: "400-seaview-dr",
    title: "Coastal Luxury Vista Residence",
    address: "400 Seaview Drive",
    city: "Aptos / Monterey Bay Coastline",
    state: "CA",
    zip: "95003",
    price: 2888520,
    beds: 3,
    baths: 3,
    sqft: 2650,
    status: "Active",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    description: "Sublime contemporary coastal retreat framed by expansive glass walls capturing ocean horizons, wide-plank French oak floors, and entertainer's open-concept kitchen.",
    featured: true,
    highlights: ["Unobstructed Ocean Views", "Wraparound Brazilian Teak Deck", "Thermador Culinary Suite"]
  },
  {
    id: "14961-national-ave",
    title: "Refined Los Gatos Private Compound",
    address: "14961 National Avenue",
    city: "Los Gatos",
    state: "CA",
    zip: "95032",
    price: 2495000,
    beds: 3,
    baths: 3,
    sqft: 1881,
    status: "Just Sold",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
    description: "Represented by Joe Velasco Group. Beautifully remodeled private retreat on over 17,000 sq ft lot featuring verdant heritage oaks, designer spa baths, and walk-to-town convenience.",
    featured: false,
    highlights: ["17,100 SF Flat Lot", "Designer Finishes", "Mature Landscaping", "Walk to Downtown"]
  }
];
