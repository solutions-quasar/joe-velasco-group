export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  context: string;
  transactions?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "denardi",
    quote: "Joe Velasco has represented me in over 11 transactions in the past 10 years. Each and every time Joe Velasco has surpassed my expectations. We have become friends and could not be happier with the services we receive and have referred him to multiple people.",
    author: "Kevin DeNardi",
    title: "CEO, DeNardi Development Group",
    context: "Silicon Valley Residential & Commercial Development",
    transactions: "11+ Transactions"
  },
  {
    id: "berchart",
    quote: "Joe Velasco has represented me on several homes and development projects. His presentation is second to none, and has great support staff from his team. I would not use another realtor.",
    author: "Margaret Berchart",
    title: "VP, Berchart Expeditions",
    context: "Luxury Estates & Development Advisory",
    transactions: "Multiple Acquisitions & Sales"
  },
  {
    id: "cupertino-client",
    quote: "Joe sold our Cupertino home and seamlessly handled everything from beginning to end, including a light remodel that maximized our return. We were thrilled with the outcome and have since purchased two more properties through him in Los Gatos.",
    author: "David & Sarah Lin",
    title: "Cupertino & Los Gatos Homeowners",
    context: "Full-Service Concierge Listing & Re-investment",
    transactions: "3 Transactions"
  }
];
