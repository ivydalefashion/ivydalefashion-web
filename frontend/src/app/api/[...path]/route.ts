import { NextRequest, NextResponse } from 'next/server';

const BACKEND_BASE_URL = process.env.NEXT_PRIVATE_API_URL || 'http://localhost:5000';

function buildTargetUrl(request: NextRequest, path: string[]) {
  const incomingUrl = new URL(request.url);
  const targetPath = path.join('/');
  const targetUrl = new URL(`/backend/${targetPath}`, BACKEND_BASE_URL);
  targetUrl.search = incomingUrl.search;
  return targetUrl.toString();
}

function copyResponseHeaders(response: Response) {
  const headers = new Headers(response.headers);
  headers.delete('content-encoding');
  headers.delete('transfer-encoding');
  headers.delete('content-length');
  return headers;
}

async function proxy(request: NextRequest, path: string[]) {
  const targetUrl = buildTargetUrl(request, path);
  const contentType = request.headers.get('content-type') || '';
  const hasBody = request.method !== 'GET' && request.method !== 'HEAD';

  const body =
    hasBody && !contentType.includes('multipart/form-data')
      ? await request.text()
      : hasBody
        ? await request.formData()
        : undefined;

  const response = await fetch(targetUrl, {
    method: request.method,
    headers: {
      Authorization: request.headers.get('authorization') || '',
      'Content-Type': contentType,
    },
    body: hasBody ? (body as BodyInit) : undefined,
    cache: 'no-store',
  });

  return new NextResponse(response.body, {
    status: response.status,
    headers: copyResponseHeaders(response),
  });
}

export async function GET(request: NextRequest, context: { params: { path: string[] } }) {
  return proxy(request, context.params.path);
}

export async function POST(request: NextRequest, context: { params: { path: string[] } }) {
  return proxy(request, context.params.path);
}

export async function PUT(request: NextRequest, context: { params: { path: string[] } }) {
  return proxy(request, context.params.path);
}

export async function PATCH(request: NextRequest, context: { params: { path: string[] } }) {
  return proxy(request, context.params.path);
}

export async function DELETE(request: NextRequest, context: { params: { path: string[] } }) {
  return proxy(request, context.params.path);
}
