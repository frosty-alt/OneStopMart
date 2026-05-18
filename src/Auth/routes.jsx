
import { Routes, Route } from "react-router-dom";
import Terms from "./terms"
import Login from './login'
const   AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}
export default AppRoutes;