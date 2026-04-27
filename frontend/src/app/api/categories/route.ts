import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const query = url.search || '';
  return fetch(`${process.env.NEXT_PRIVATE_API_URL || 'http://localhost:5000'}/backend/categories${query}`, {
    method: 'GET',
    headers: {
      Authorization: request.headers.get('authorization') || '',
    },
    cache: 'no-store',
  });
}
