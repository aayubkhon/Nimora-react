import { BoArticle } from "./boArticle";
import { Order } from "./order";
import { Product } from "./product";

/*REACT APP STATE*/

export interface AppRootState {
  homePage: HomePageState;
  shopPage: ShopPageState;
  boArticles: BoArticle;
  ordersPage: OrdersPageState;
  communityPage: CommunityPageState;
}

/*HOMEPAGE*/
export interface HomePageState {
  trendProducts: Product[];
  bestSellerProduct: Product[];
}

/*SHOPPAGE*/
export interface ShopPageState {
  allProducts: Product[];
  relatedProducts: Product[];
  chosenProduct: Product | null;
  //   productReviews: Review[];
}

/*ORDERS PAGE*/

export interface OrdersPageState {
  processOrders: Order[];
  finishedOrders: Order[];
  cancelledOrders: Order[];
  pausedOrders: Order[];
  allOrders: Order[];
}

export interface CommunityPageState {
  tergetBoArticles: BoArticle[];
}
