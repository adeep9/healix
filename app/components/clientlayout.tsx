"use client";

import { usePathname } from "next/navigation";
import Dualbar from "./dualbar";
import React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if the current route is the index page or waitlist page
  const showDualbar = pathname !== "/" && pathname !== "/waitlist";

  return (
    <>
      {showDualbar && <Dualbar />}
      {children}
    </>
  );
}
