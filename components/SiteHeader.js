"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "../content/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sectionIds = navItems
      .map((item) => item.sectionId)
      .filter(Boolean);

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="site-header content-wrap">
      <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1>{site.name}</h1>
      </Link>
      <p className="tagline">{site.tagline}</p>
      <p className="location">{site.location}</p>
      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) => {
          const isResume = item.href === "/resume";
          const isActive = isResume
            ? pathname === "/resume"
            : pathname === "/" && item.sectionId === activeSection;

          if (isResume) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className={isActive ? "active" : undefined}
              >
                {item.label}
              </Link>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={isActive ? "active" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
