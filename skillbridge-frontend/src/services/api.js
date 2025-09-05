export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function api(path, { method='GET', body, token } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data?.msg || 'Request failed';
    throw new Error(msg);
  }
  return data;
}
