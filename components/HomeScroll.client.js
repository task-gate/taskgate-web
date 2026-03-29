"use client";

import { useEffect } from "react";

export default function HomeScroll({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return children;
}
