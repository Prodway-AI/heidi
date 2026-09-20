"use client";

import { useEffect } from "react";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function scrollToCentered(el: HTMLElement, duration = 920) {
  const start = window.scrollY;
  const dest = start + el.getBoundingClientRect().top - (window.innerHeight - el.getBoundingClientRect().height) / 2;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, dest);
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    const began = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - began) / duration);
      window.scrollTo(0, start + (dest - start) * easeInOutCubic(progress));
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        resolve();
      }
    };
    requestAnimationFrame(tick);
  });
}

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
      void scrollToCentered(current).then(light);
      history.pushState(null, "", "#experience");
    };

    document.addEventListener("click", onClick);
    return () => {
      observer.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
