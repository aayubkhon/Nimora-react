import { BoArticle } from "./boArticle";
import { Shop } from "./user";

export interface AppRootState {
   homePage: HomePageState;
}

export interface AppRootState {
   boArticles: BoArticle;

}

export interface HomePageState{
   topTradings: Shop[],
   bestSellerProduct:Shop[]


}