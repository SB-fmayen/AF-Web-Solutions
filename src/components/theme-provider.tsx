"use client";

import React, { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensure light mode is always set
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  }, []);

  return <>{children}</>;
}
