import { Member } from "./user";

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
  page: number;
  limit: number;
  order: string;
  shop_mb_id?: string;
  product_collection?: string;
  search?: string;
}

export interface MemberLiken {
  like_group: string;
  like_status: number;
  like_ref_id: string;
}

export interface CartItem {
  _id?: string;
  product_id: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
  size?: string;
}

export interface ChatMessage {
  msg: string;
  mb_id: string;
  mb_nick: string;
  mb_image: string;
}

export interface ChatGreetMsg {
  text: string;
}
export interface ChatInfoMsg {
  total: number;
}