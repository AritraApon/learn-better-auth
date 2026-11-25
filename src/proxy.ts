import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 // path to your Better Auth server instance

import { auth } from './lib/auth';
import { headers } from 'next/headers';


// This function can be marked `async` if using `await` inside

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
  if(!session){
     return NextResponse.redirect(new URL('/auth/login', request.url))
  }

}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher:[ '/about' ,'/career', '/projects', '/support'],
}