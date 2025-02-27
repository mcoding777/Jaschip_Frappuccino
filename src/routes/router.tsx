import { createBrowserRouter } from "react-router-dom";
import { DeepDive1, DeepDive2, Home } from "../pages";

export const routePaths = {
  home: '/',
  deepDive1: '/deep-dive/1',
  deepDive2: '/deep-dive/2'
}


export const router = createBrowserRouter([
    {
      path: routePaths.home,
      element: <Home />,
    },
    {
      path: routePaths.deepDive1,
      element: <DeepDive1 />,
    },
    {
      path: routePaths.deepDive2,
      element: <DeepDive2 />,
    },
  ], {
    basename: '/Jaschip_Frappuccino'
  });