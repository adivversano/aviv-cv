import { useEffect } from "react";

const HEADER_OFFSET = 116; // Sticky header height in pixels

export default function useScrollWithOffset(): null {
  useEffect(() => {
    const handleAnchorClick = (event: Event) => {
      // Find the closest anchor element with an href starting with '#'
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#']");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      
      // Prevent default behavior if it is an anchor link
      event.preventDefault();

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      // Calculate the scroll position, factoring in the header offset
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - HEADER_OFFSET;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null; // This component doesn't render anything visible
}