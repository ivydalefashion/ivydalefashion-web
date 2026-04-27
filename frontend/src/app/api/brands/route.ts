import { NextRequest } from 'next/server';

const BACKEND_BASE_URL = process.env.NEXT_PRIVATE_API_URL || 'http://localhost:5000';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const query = url.search || '';
  return fetch(`${BACKEND_BASE_URL}/backend/brands${query}`, {
    method: 'GET',
    headers: {
      Authorization: request.headers.get('authorization') || '',
    },
    cache: 'no-store',
  });
}
