import { NextRequest, NextResponse } from 'next/server';

const BACKEND_BASE_URL = process.env.NEXT_PRIVATE_API_URL || 'http://localhost:5000';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const response = await fetch(`${BACKEND_BASE_URL}/backend/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    cache: 'no-store',
  });

  const responseBody = await response.text();
  return new NextResponse(responseBody, {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
