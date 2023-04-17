import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Account from "../views/Account.vue";
import Cart from "../views/Cart.vue";
import Details from '../views/ProductDetails.vue'
import Success from "../views/Success.vue";
import ShoppCart from '../views/Shopp-Cart.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/products",
      name: "Products",
      component: Products,
    },
    {
      path: "/about-us",
      name: "About",
      component: About,
    },
    {
      path: "/contact-us",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
    },
    {
      path: "/shopping-cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/success",
      name: "Success",
      component: Success,
    },
    {
      path:"/details",
      name:"details",
      component:Details
    },
    {
      path:"/shopp-cart",
      name:"Shopp-Cart",
      component:ShoppCart
    },
  ],
});
export default router;
