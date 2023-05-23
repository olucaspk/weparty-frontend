import jwt from 'jsonwebtoken'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const userToken = request.cookies.get('user-token')?.value

  if (userToken && jwt.verify(userToken, process.env.JWT_SECRET!)) {
    console.log('token verificado')
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}
