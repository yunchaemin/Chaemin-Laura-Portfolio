export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  industry: string;
  role: string;
  description: string;
  impact: string[];
  mainImage: string;
  detailImages: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  aspect: 'portrait' | 'landscape' | 'square';
  top: number; // percentage coordinate for scattered canvas
  left: number; // percentage coordinate for scattered canvas
  scale?: number;
}
