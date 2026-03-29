"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function ContactFAB() {
  return (
    <Link
      href="/contact-us"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/25 transition-all hover:scale-105 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
      aria-label="Contact us"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
    </Link>
  );
}
