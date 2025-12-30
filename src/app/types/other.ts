export interface NavbarObj {
  element: JSX.Element;
  title: string;
  path: string;
  private: boolean;
  hidden: boolean;
}

export interface SearchObj {
  page: number;
  order: string;
  limit: number;
}

export interface ProductData {
  order: string;
  page: number;
  limit: number;
  shop_mb_id?: string;
  product_collection?: string;
}
