import {createBrowserRouter} from "react-router-dom";
import Home from "./Home";
import Delivery from "./Delivery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
      path: "/Delivery",
      element: <Delivery />,
  },
]);