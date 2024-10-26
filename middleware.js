import { NextResponse } from "next/server";

export const middleware = (request) => {
  // Get the session token directly from cookies
  const token = request.cookies.get("next-auth.session-token");

  // Check if the token exists and if the URL contains "/main"
  const url = request.url;

  console.log("Token:", token); // This should output the token or undefined

  // Redirect to sign-in if the token is not present and the user is trying to access "/main"
  if (!token && url.includes("/main")) {
    return NextResponse.redirect(new URL("/api/auth/signin", url));
  }

  // Allow the request to proceed if the token exists
  return NextResponse.next();
};

export const config = {
  matcher: ["/main"], // Apply this middleware only to the "/main" route
};
