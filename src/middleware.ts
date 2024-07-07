import { handleCors, corsConfig } from './middlewares/cors';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // CORS 처리
  if (
    corsConfig.matcher.some((pattern) => pattern.test(request.nextUrl.pathname))
  ) {
    const corsResponse = handleCors(request);
    if (corsResponse) {
      return corsResponse;
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.nextUrl.clone().toString());

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
