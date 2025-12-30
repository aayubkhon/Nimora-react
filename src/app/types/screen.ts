import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Shop } from "./user";

export interface AppRootState {
   homePage: HomePageState;
}

export interface AppRootState {
   boArticles: BoArticle;

}

export interface HomePageState{
   trendProducts: Product[],
   bestSellerProduct:Product[]


}