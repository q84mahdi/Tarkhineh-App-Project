import { Outlet } from "react-router-dom";
import Navbar from "../Features/Navbar/Navbar";
import Footer from "../Features/Footer/Footer";

function AppLayout() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}
export default AppLayout;
