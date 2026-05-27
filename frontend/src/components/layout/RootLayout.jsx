import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Footer from "./Footer.jsx";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}