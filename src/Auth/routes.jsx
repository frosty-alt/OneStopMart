import Login from "./login";
import OtpVerify from "./OtpVerify";
import Home from "../Home/Home";
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

    }
    
  ]);
const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes;