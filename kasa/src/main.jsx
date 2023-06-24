import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./View/Home/Home";
import "./index.css";

import Root from "./routes/root";
import Survey from "./Survey";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home  />,
    element: <Survey  />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
