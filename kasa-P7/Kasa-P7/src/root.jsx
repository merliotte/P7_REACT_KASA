import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AppartementPage from "./View/AppartementPage/AppartementPage";
import ErrorPage from "./View/ErrorPage/ErrorPage";
import AboutPage from "./View/About/AboutPage";
import Home from "./View/Home/Home";
import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer"

function WrapperRoute({children}){
  return (
    <>
      <Header /> 
      {children}
      <Footer /> 
    </>
  )
  
}

const router = createBrowserRouter([
    {
      path:"/",
      element: <WrapperRoute>
        <Home/>
      </WrapperRoute>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/appartement",
      element: 
      <WrapperRoute>
        <AppartementPage />
      </WrapperRoute>,

    },
    {
      path: "/aboutPage",
      element: 
      <WrapperRoute>
        <AboutPage />
      </WrapperRoute>

    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);