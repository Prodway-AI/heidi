export function apiBase(): string | null {
  const url = process.env.NEXT_PUBLIC_API_URL;
  if (!url) return null;
  return url.replace(/\/$/, "");
}

export async function getHealth(): Promise<{ status: string } | null> {
  const base = apiBase();
  if (!base) return null;

  const response = await fetch(`${base}/health`);
  if (!response.ok) {
    throw new Error(`health check failed: ${response.status}`);
  }
  return response.json();
}
