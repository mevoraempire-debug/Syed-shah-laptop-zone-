export type ProductCategory = 'laptop' | 'smartphone';

export type ProductCondition = 'Brand New' | 'Pre-Owned / Mint' | 'Open Box';

export type ProductAvailability = 'In Stock' | 'Available on Order' | 'Limited Stock';

export interface ProductSpecifications {
  processor?: string;
  ram?: string;
  storage?: string;
  display?: string;
  graphics?: string;
  battery?: string;
  camera?: string;
  os?: string;
  weight?: string;
  color?: string;
  ports?: string;
  warrantyNotice?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  subCategory: string; // e.g. 'Business Ultrabook', 'Gaming Beast', 'Flagship Smartphone', 'Budget Pro'
  condition: ProductCondition;
  priceEstimate: string; // e.g. "Rs. 85,000 - 95,000" or "Inquire on WhatsApp"
  priceNumeric?: number;
  oldPriceEstimate?: string;
  image: string;
  gallery: string[];
  shortDescription: string;
  specifications: ProductSpecifications;
  availability: ProductAvailability;
  isHotDeal?: boolean;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  dealHighlight?: string;
}

export interface FilterState {
  searchQuery: string;
  category: 'all' | 'laptop' | 'smartphone';
  subCategory: string;
  brand: string;
  condition: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest';
}
