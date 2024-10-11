"use client";

//footer page so i can have a link to the waitlist page.

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 h-10 bg-emerald-800 flex items-center justify-end px-4">
      <Link href="/waitlist">
        <div className="text-emerald-500 text-xs hover:underline">
          Join the Waitlist
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
