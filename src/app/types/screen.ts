import { BoArticle } from "./boArticle";
import { Product } from "./product";


/*REACT APP STATE*/

export interface AppRootState {
   homePage: HomePageState;
   shopPage:ShopPageState;
   boArticles: BoArticle;
}


/*HOMEPAGE*/
export interface HomePageState{
   trendProducts: Product[],
   bestSellerProduct:Product[],
}

/*SHOPPAGE*/
export interface ShopPageState {
  allProducts: Product[];
  relatedProducts: Product[];
  chosenProduct: Product | null;
//   productReviews: Review[];
}