import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "../index.css";
import App from "../App";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AppartementPage from "../components/AppartementPage/AppartementPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const HeaderFooterLayout = () => {
return <>

  <Header />
  <Outlet />
  <Footer />
  
</>
}

const router = createBrowserRouter([
    {
      element: <HeaderFooterLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/",
          element: <App />
        },
        {
          path: "/appartement",
          element: <AppartementPage />,
        },
        {
          path: "/about",
          element: <h1> A propos</h1>
        },
      ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);