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

export interface ProductSearchObj {
  order: string;
  page: number;
  limit: number;
  shop_mb_id?: string;
  product_collection?: string;
}

export interface MemberLiken{
  like_group:string,
  like_status: number,
  like_ref_id:string
}