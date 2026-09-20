# Heidi Herzog personal site — design

Approved 2026-09-20.

## Purpose

A modern professional site for Heidi Herzog at heidiherzog.com. Content is limited to public LinkedIn facts. No invented claims, follower counts, or LinkedIn chrome.

## Hosting

Static Next.js (TypeScript) on GitHub Pages. Route53 serves `heidiherzog.com` and `www`. Images live in repo `assets/` and are copied into `web/public/assets/` for the build.

## Future API

`api/` is a small Go `net/http` service with `/health` and `/version`. The site reads `NEXT_PUBLIC_API_URL`. When endpoints or an agent ship, point `api.heidiherzog.com` at a lightweight host. The static site stays on Pages.

## Content

- Name: Heidi Herzog
- Line: Contract Analyst · Houston
- About: Communication graduate from UT Austin. Works in contract administration in Houston energy, with internships in contracts, PR, and marketing.
- Experience: Energy Transfer (Oct 2025–present); Twin Eagle intern (May–Oct 2025); PR Boutique Texas intern (Jun–Aug 2024); ARC Sales & Marketing intern (Jun–Aug 2023); Legal Videographer, RealTime Media (May–Aug 2022)
- Education: UT Austin, Communication (Aug 2021–May 2025)
- Contact: LinkedIn only

## Visual

Limestone portrait as hero. Desktop: full landscape, type in the open sky on the right. Mobile: face-centered crop (`hero-mobile.jpg`). Palette from the photo: limestone, ink, burnt orange, sunlit sage.
