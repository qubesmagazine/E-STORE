import React, { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Spinner from "../utils/Spinner";
import Account from "../Pages/Account";
import Privateroutes from "./Privateroutes";
import Checkoutdetails from "../Pages/Checkoutdetails";
import Checkout from "../Pages/Checkout";
import Customer from "../Pages/Customer";
import Order from "../Pages/Order";
import Orderdetail from "../Pages/Orderdetail";
const Home = lazy(() => import("../Pages/Home"));
const ProductDetail = lazy(() => import("../Pages/Productdetail"));
const SearchResult = lazy(() => import("../Pages/SearchResult"));
const Product = lazy(() => import("../Pages/Product"));

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<Spinner />}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "/products/:slug",
        element: (
          <React.Suspense fallback={<Spinner />}>
            <ProductDetail />
          </React.Suspense>
        ),
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "search",
        element: (
          <React.Suspense fallback={<Spinner />}>
            <SearchResult />
          </React.Suspense>
        ),
      },
      {
        path: "products/category/:name",
        element: (
          <React.Suspense fallback={<Spinner />}>
            <Product />
          </React.Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Privateroutes>
            <Checkout />
          </Privateroutes>
        ),
        children: [
          {
            path: "checkoutdetails",
            element: (
              <Privateroutes>
                <Checkoutdetails />
              </Privateroutes>
            ),
          },
        ],
      },
      {
        path: 'customer',
        element: (
          <Privateroutes>
            <Customer />
          </Privateroutes>
        ),
        children: [
          {
            path: 'orders',
            element: (
              <React.Suspense fallback={<Spinner />}>
                <Privateroutes>
                  <Order />
                </Privateroutes>
              </React.Suspense>
            ),
            children: [
              {
                path: ':id',
                element: (
                  <React.Suspense fallback={<Spinner />}>
                    <Privateroutes>
                      <Orderdetail />
                    </Privateroutes>
                  </React.Suspense>
                ),
              },
            ],


       }
       ]
      }
    ],
  },
];

const Routespath = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default Routespath;
