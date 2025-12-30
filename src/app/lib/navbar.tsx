import HomePage from "../screens/HomePage";
import ShopPage from "../screens/ShopPage";
import StorePage from "../screens/StorePage/store";
import { HelpPage } from "../screens/HelpPage/";
import CommunityPage from "../screens/CommunityPage/community";
import OneJewellry from "../screens/ShopPage/oneJewellry";
import OrdersPage from "../screens/OrdersPage";
import SignUp from "../screens/SignUpPage";
import LoginPage from "../screens/LoginPage";
import VisitMyPage from "../screens/MemberPage/visitMyPage";
import { NavbarObj } from "../types/other";
import VisitOtherPage from '../screens/MemberPage/visitOtherPage';
import Basket from "../components/header/basket";
import CheckoutPage from "../components/header/others";


export const navbar: NavbarObj[] = [
  {
    element: <HomePage />,
    title: "Home",
    path: "/",
    private: false,
    hidden: false,
  },
  {
    element: <ShopPage />,
    title: "Shop",
    path: "/shop",
    private: false,
    hidden: false,
  },
    {
    element: <StorePage />,
    title: "Store",
    path: "/store",
    private: false,
    hidden: false,
  },

    {
    element: <CommunityPage />,
    title: "community",
    path: "/community",
    private: false,
    hidden: false,
  },

    {
    element: <HelpPage />,
    title: "CS",
    path: "/help",
    private: false,
    hidden: false,
  },
  {
    element: <OneJewellry />,
    title: "OneJewellry",
    path: "/shop/:product_id",
    private: false,
    hidden: true,
  },
  {
    element: <OrdersPage />,
    title: "Orders",
    path: "/orders",
    private: true,
    hidden: true,
  },
  {
    element: <SignUp />,
    title: "sign-up",
    path: "/sign-up",
    private: false,
    hidden: true,
  },
  {
    element: <LoginPage />,
    title: "log-in",
    path: "/login",
    private: false,
    hidden: true,
  },
  {
    element: <VisitMyPage />,
    title: "my-account",
    path: "/my-account",
    private: false,
    hidden: true,
  },
   {
    element: <VisitOtherPage />,
    title: "other-account",
    path: "/my-account/:other",
    private: false,
    hidden: true,
  },
  {
    element: <Basket />,
    title: "basket",
    path: "/cart",
    private: false,
    hidden: true,
  },
    {
    element: <CheckoutPage />,
    title: "chechout",
    path: "/checkout",
    private: false,
    hidden: true,
  },
];