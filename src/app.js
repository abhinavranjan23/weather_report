import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import AppLayout from "./Components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Daily from "./Components/Daily";
import AirQuality from "./Components/AirQuality";
import ErrorPage from "./Components/ErrorPage";
import Shimmer from "./Components/Shimmer";
import AboutUs from "./Components/Aboutus";
import ContactUs from "./Components/Contactus";

const LazzyHourly = lazy(() => import("./Components/Hourly"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/hourly",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <LazzyHourly />
          </Suspense>
        ),
      },
      {
        path: "/daily",
        element: <Daily />,
      },
      {
        path: "/airquality",
        element: <AirQuality />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
