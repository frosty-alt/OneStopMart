import Bakery from '../Navbaritems/Bakery'
import Deals from '../Navbaritems/Deals'
import Local_Farms from '../Home/Navbaritems/Local_Farms'
import organic from '../Home/Navbaritems/organic'
import Groceries from '../Home/Navbaritems/Groceries'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
 const NavBarRoutes = createBrowserRouter([
  {
    path: "/bakery",
    element: <Bakery />
  },
  {
    path: "/deals",
    element: <Deals />
  },
  {
    path: "/local-farms",
    element: <Local_Farms />
  },
  {
    path: "/organic",
    element: <organic />
  },
  {
    path: "/groceries",
    element: <Groceries />
  }
]);
