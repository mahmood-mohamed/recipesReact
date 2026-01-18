import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
  
      <div className="flex min-h-screen">

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 flex flex-col">

          <Navbar onMenuClick={() => setSidebarOpen(true)} />

          <main
            className="
              flex-1
              w-full
              px-4 sm:px-6 lg:px-8
              py-6
              max-w-screen-2xl
              mx-auto
            "
          >
            <Outlet />
          </main>

          <Footer />

          <ScrollToTopButton />
        </div>

      </div>
    </div>

  );
}
// <div className="flex min-h-screen">
// <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

// <div className="flex-1 flex flex-col">
// <Navbar onMenuClick={() => setSidebarOpen(true)} />
// <main className="flex-1 p-6">
//   <Outlet />
// </main>
// <Footer />
// </div>
// </div>
