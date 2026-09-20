# Heidi Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Ship a static Next.js personal site for Heidi Herzog on GitHub Pages with a Go API scaffold ready for later endpoints.

**Architecture:** `web/` is a statically exported Next.js app. `api/` is a Go service with health/version only. `assets/` holds source images. GitHub Actions deploys `web/out` to Pages. Route53 points heidiherzog.com at GitHub Pages.

**Tech Stack:** Next.js (App Router, TypeScript, static export), Go 1.23 net/http, GitHub Actions, Route53

---

### Task 1: Hero assets

**Files:**
- Create: `assets/hero.jpg`
- Create: `assets/hero-mobile.jpg`
- Create: `web/public/assets/hero.jpg`
- Create: `web/public/assets/hero-mobile.jpg`

Copy the approved portrait. Crop a face-centered mobile frame. Same files in `web/public/assets/` for the Next build.

### Task 2: Go API scaffold

**Files:**
- Create: `api/go.mod`
- Create: `api/cmd/server/main.go`
- Create: `api/internal/server/server.go`
- Create: `api/internal/handlers/health.go`
- Test: `api/internal/handlers/health_test.go`

Health returns 200 JSON `{status: ok}`. Version returns `{version, service}`. CORS allows heidiherzog.com. Tests cover both routes.

### Task 3: Next.js site

**Files:**
- Create: `web/` Next.js app with `output: "export"`
- Create: `web/lib/profile.ts`
- Create: `web/lib/api.ts`
- Create: `web/app/page.tsx` and section components

Single page: hero, about, experience, education, contact. `NEXT_PUBLIC_API_URL` optional.

### Task 4: CI/CD and DNS

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `.github/workflows/api.yml`
- Create: `web/public/CNAME` → `heidiherzog.com`

Workflow builds `web` and deploys to GitHub Pages. Second workflow tests Go. Route53 hosted zone + A/AAAA/CNAME for GitHub Pages.

### Task 5: Verify

`npm run build` in `web`, `go test ./...` in `api`, browse desktop and mobile locally.
