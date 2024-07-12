import { nanoid } from "nanoid";
import { Home } from "../pages/home";
import { Contact } from "../pages/contact";
import { About } from "../pages/about";
// userr
import { Profile } from "../pages/user/profile";
import { OrderList } from "../pages/user/order-list";
import { ChangeAccount } from "../pages/user/change-account";
import { ProductDetail } from "../pages/product-detail";

export const routes = [
  {
    component: Home,
    id: nanoid(),
  },
  {
    component: Contact,
    path: "contact",
    id: nanoid(),
  },
  {
    component: ProductDetail,
    path: "products/product-detail/:id",
    id: nanoid(),
  },
  {
    component: About,
    path: "about",
    id: nanoid(),
  },
];

export const userRoute = [
  {
    component: Profile,
    id: nanoid(),
  },
  {
    component: OrderList,
    path: "order-list",
    id: nanoid(),
  },
  {
    component: ChangeAccount,
    path: "change-account",
    id: nanoid(),
  },
];
