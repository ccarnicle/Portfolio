"use client";

import { useEffect } from "react";

export default function ScrollToWork() {
  useEffect(() => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return null;
}
