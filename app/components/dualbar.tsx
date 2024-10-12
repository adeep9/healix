"use client";
import Navbar from "./ui/navbar";
import Sidebar from "./ui/sidebar";

const Dualbar = () => {
  // get userId from session data
  return (
    <main>
      <div className="md:hidden">
        {/* Navbar will be visible only on small and medium screens (md and below) */}
        <Navbar />
      </div>

      <div className="hidden md:block">
        {/* Sidebar will be visible only on large screens and above (lg and above) */}
        <Sidebar />
      </div>
    </main>
  );
};

export default Dualbar;
