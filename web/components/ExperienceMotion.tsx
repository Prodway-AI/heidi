"use client";

import { useEffect } from "react";

export function ExperienceMotion() {
  useEffect(() => {
    const current = document.getElementById("current-role");
    if (!current) return;

    const light = () => current.classList.add("is-lit");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) light();
      },
      { threshold: 0.45 },
    );
    observer.observe(current);

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest('a[href="#experience"], a[href="#current-role"]');
      if (!link) return;

      event.preventDefault();
      current.scrollIntoView({ behavior: "smooth", block: "center" });
      history.pushState(null, "", "#experience");
      window.setTimeout(light, 280);
    };

    document.addEventListener("click", onClick);
    return () => {
      observer.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
