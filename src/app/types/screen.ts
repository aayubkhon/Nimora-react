import { BoArticle } from "./boArticle";
import { Follower, Following } from "./follow";
import { Order } from "./order";
import { Product } from "./product";
import { Review } from "./review";
import { Member, Shop } from "./user";

/*REACT APP STATE*/

export interface AppRootState {
  homePage: HomePageState;
  shopPage: ShopPageState;
  storePage:StorePageState;
  boArticles: BoArticle;
  ordersPage: OrdersPageState;
  communityPage: CommunityPageState;
  memberPage: MemberPageState;
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
  productReviews: Review[];
  targetReviews: Review[];
}

/*ORDERS PAGE*/

export interface OrdersPageState {
  processOrders: Order[];
  finishedOrders: Order[];
  cancelledOrders: Order[];
  pausedOrders: Order[];
  allOrders: Order[];
  chosenOrder: Order | null;
}
/*COMMUNITY PAGE*/

export interface CommunityPageState {
  tergetBoArticles: BoArticle[];
}

/*MEMBER PAGE*/
export interface MemberPageState {
  chosenMember: Member | null;
  chosenMemberArticles: BoArticle[];
  chosenSingleArticles: BoArticle | null;
  memberFollowers: Follower[];
  memberFollowings: Following[];
  myFavorite: [] | null;
}

/*STORE PAGE*/
export interface StorePageState{
  storeShops: Shop[]
}
