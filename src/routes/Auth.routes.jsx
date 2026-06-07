import Login from "../Auth/login";
import OtpVerify from "../Auth/OtpVerify";
import Home from "../Home/Home";
import Userlogin from "../Auth/userlogin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



  const router = createBrowserRouter([
      {
      path: "/home",
      element: <Home />
    },
    {
      path: "/",
      element: <Login />
    },
    {
     path: "/otp-verify",
  element: <OtpVerify />

    },
    {
      path: "/userlogin",
      element: <Userlogin />
    }
  ]);
const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes;