import { Project, ServiceItem, GalleryImage } from './types';
import hankooktire from './assets/images/hankooktire_1783028832745.jpg';
import taiwantourism from './assets/images/taiwantourism_1783028843330.jpg';
import donghang from './assets/images/donghang_1783028852587.jpg';
import naturecell2 from './assets/images/naturecell2_1783028861032.jpg';
import henkel from './assets/images/henkel_1783028869655.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'solenne',
    number: '01',
    title: 'Solenne',
    subtitle: 'Sustainable Couture & Branding Campaign',
    category: 'Creative Direction & Strategy',
    year: '2025',
    client: 'Solenne Paris',
    industry: 'High-End Sustainable Fashion',
    role: 'Lead Project Coordinator & Creative PM',
    description: 'A comprehensive branding campaign for a sustainable Parisian luxury house. Fusing traditional couture craftsmanship with modern ecological values, this project involved supervising physical print assets, managing cross-platform digital marketing campaigns, and aligning visual communications across European and Asian markets.',
    impact: [
      'Successfully boosted social media engagement by over 140% during launch week.',
      'Managed a multi-million won localization budget, achieving 100% on-time asset delivery.',
      'Coordinated visual asset workflows with 12 international agency partners.'
    ],
    mainImage: hankooktire,
    detailImages: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85'
    ]
  },
  {
    id: 'reveal',
    number: '02',
    title: 'Reveal',
    subtitle: 'Integrated Global Beauty Launch',
    category: 'Marketing Strategy & PR',
    year: '2025',
    client: 'Reveal Cosmetics',
    industry: 'Minimalist Skincare & Wellness',
    role: 'Integrated Marketing Coordinator',
    description: 'Spearheaded the multi-channel launch campaign for Reveal Cosmetics. Developed global communication playbooks, supervised creative direction for product photography, and established influencer partnership matrices that drove consistent brand positioning.',
    impact: [
      'Achieved a 210% increase in brand recognition across targeted young professional demographics.',
      'Designed and executed influencer outreach workflows, securing over 45 high-quality organic reviews.',
      'Harmonized the e-commerce UX strategy with the physical packaging aesthetic.'
    ],
    mainImage: taiwantourism,
    detailImages: [
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=85'
    ]
  },
  {
    id: 'vendange',
    number: '03',
    title: 'Vendange',
    subtitle: 'Estate Rebranding & Digital Experience',
    category: 'Brand Identity & Web Design',
    year: '2024',
    client: 'Vendange Vineyards',
    industry: 'Artisanal Winemaking & Tourism',
    role: 'Co-Designer & Marketing PM',
    description: 'Led the digital transformation of Vendange Vineyards. Crafted a responsive digital storefront, revised typography guidelines to fit heritage branding, and designed print-ready collateral such as menus, wine club brochures, and event invitations.',
    impact: [
      'Improved the website’s conversion rate by 34% through a fully streamlined user reservation journey.',
      'Supervised the art direction of on-site photography to portray the vineyard’s organic harvesting story.',
      'Coordinated packaging design updates that won the regional artisanal award.'
    ],
    mainImage: donghang,
    detailImages: [
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1543418219-44e30b057fc5?auto=format&fit=crop&w=800&q=85'
    ]
  },
  {
    id: 'epi',
    number: '04',
    title: 'Epi',
    subtitle: 'International Architecture Press Tour',
    category: 'Project Management & PR',
    year: '2024',
    client: 'Epi Architectural Group',
    industry: 'Modern Architecture & Urbanism',
    role: 'Event & Press PM Coordinator',
    description: 'Coordinated workflows, supervised press release assets, and managed high-profile VIP guest communications for an international architecture exhibition. Maintained tight delivery schedules across multiple timezones, resulting in extensive media coverage.',
    impact: [
      'Delivered the exhibition assets with zero delays and 15% under the estimated operational budget.',
      'Facilitated public relations communications, resulting in feature articles in major design journals.',
      'Maintained consistent visual and linguistic brand alignment across all physical/digital assets.'
    ],
    mainImage: naturecell2,
    detailImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1504297050568-910d24c426d3?auto=format&fit=crop&w=800&q=85'
    ]
  },
  {
    id: 'scarlett',
    number: '05',
    title: 'Scarlett',
    subtitle: 'Luxury Lifestyle Publication Layout',
    category: 'Brand Identity & Communication',
    year: '2023',
    client: 'Scarlett Magazine',
    industry: 'Premium Lifestyle & Editorial Print',
    role: 'Visual Identity & Layout Coordinator',
    description: 'Developed modern layout designs and optimized in-house asset-management workflows for Scarlett Magazine. Designed responsive marketing landing pages, synchronized client branding advertisements, and improved typography standards for print.',
    impact: [
      'Reduced average editorial asset-creation cycles by 25% by standardizing a cloud-based template system.',
      'Supervised layout formatting for a special 200-page high-fashion anniversary edition.',
      'Delivered bespoke ad layouts for high-fashion clients including perfume and watchmakers.'
    ],
    mainImage: henkel,
    detailImages: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Integrated Marketing & Strategy',
    description: 'Managing holistic, multi-channel marketing campaigns that maintain absolute brand consistency. From local activations to global initiatives, ensuring your story reaches the right audience through the perfect channels.',
    details: [
      'Global & Domestic Campaign Strategy',
      'Social Media Activation & Influencer Engagement',
      'Performance Analytics & Campaign KPI Optimization',
      'Target Demographic Research & Positioning'
    ]
  },
  {
    number: '02',
    title: 'Project Management & Coordination',
    description: 'Exacting orchestration of complex creative projects. Aligning cross-functional teams, managing budgets, establishing clear workflows, and streamlining client communications for on-time, elite delivery.',
    details: [
      'Creative Workflow Design & Scheduling',
      'Budget Optimization & Asset Allocation',
      'Cross-Functional Team Leadership & PR Coordination',
      'Client Relations & Executive Reporting'
    ]
  },
  {
    number: '03',
    title: 'Brand Identity & System Optimization',
    description: 'Developing consistent visual standards across physical print and modern digital interfaces. Optimizing user experience designs and asset guidelines to amplify brand trust and ease of conversion.',
    details: [
      'Brand Style Guides & Visual Guidelines',
      'Print Collateral & Editorial Layout Design',
      'Digital Landing Page UX/UI Optimization',
      'Asset Management Systems Setup'
    ]
  }
];

const buildGalleryImages = (): GalleryImage[] => {
  const images: GalleryImage[] = [];
  PROJECTS.forEach((project, pIdx) => {
    // 1. Add Main Image
    const mainK = pIdx * 5;
    const mainCol = mainK % 5;
    const mainRow = Math.floor(mainK / 5);
    
    const mainLeft = 5 + mainCol * 19 + ((mainK * 7) % 6 - 3);
    const mainTop = 4 + mainRow * 25 + ((mainK * 11) % 8 - 4);
    const mainScale = 1.05 + ((mainK * 3) % 3) * 0.05;

    images.push({
      id: `g-${project.id}-main`,
      url: project.mainImage,
      title: `${project.title} - Cover`,
      aspect: 'landscape',
      top: mainTop,
      left: mainLeft,
      scale: mainScale
    });

    // 2. Add Detail Images
    project.detailImages.forEach((url, dIdx) => {
      const k = pIdx * 5 + 1 + dIdx;
      const col = k % 5;
      const row = Math.floor(k / 5);

      const leftOffset = ((k * 7) % 6 - 3);
      const topOffset = ((k * 11) % 8 - 4);
      const scale = 0.9 + ((k * 3) % 4) * 0.07;

      const aspects: ('portrait' | 'landscape' | 'square')[] = ['portrait', 'landscape', 'square', 'portrait'];
      const aspect = aspects[dIdx];

      images.push({
        id: `g-${project.id}-d${dIdx + 1}`,
        url: url,
        title: `${project.title} - Detail ${dIdx + 1}`,
        aspect: aspect,
        top: 5 + row * 25 + topOffset,
        left: 5 + col * 19 + leftOffset,
        scale: parseFloat(scale.toFixed(2))
      });
    });
  });
  return images;
};

export const GALLERY_IMAGES: GalleryImage[] = buildGalleryImages();
