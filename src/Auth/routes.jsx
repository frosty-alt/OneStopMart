import Login from "./login";
import OtpVerify from "./OtpVerify";

import { createBrowserRouter, RouterProvider } from "react-router-dom";



  const router = createBrowserRouter([
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