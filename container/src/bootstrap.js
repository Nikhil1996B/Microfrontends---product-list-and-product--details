import { mount } from "products/ProductsIndex";
import { mount as mountCarts } from "carts/CartsIndex";

console.log("container");

mount(document.querySelector("#my-products"));
mountCarts(document.querySelector("#my-carts"));
