import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse, NextRequest } from "next/server";

const isOnboardingRoute = createRouteMatcher(['/onboarding']);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId, sessionClaims } = await auth();

  // Redirect to onboarding if not completed
  if (
    userId &&
    !sessionClaims?.metadata?.onboardingCompleted &&
    !isOnboardingRoute(req) &&
    req.nextUrl.pathname !== "/"
  ) {
    return NextResponse.redirect(new URL('/onboarding', req.url));
  }

  // If on onboarding page but already completed, redirect to dashboard
  if (
    userId &&
    sessionClaims?.metadata?.onboardingCompleted &&
    isOnboardingRoute(req)
  ) {
    const role = sessionClaims.metadata.role as string;
    const roleRoutes: Record<string, string> = {
      ADMIN: '/admin',
      EMPLOYEE: '/employee',
      MANAGER: '/manager',
      MAGASINIER: '/magasinier',
      CHEFUSINE: '/chefusine',
      CHEFEQUIPE: '/chefequipe',
      CHEFQUALITE: '/chefqualite',
      COMMERCIAL: '/commercial',
    };
    
    if (role && roleRoutes[role]) {
      return NextResponse.redirect(new URL(roleRoutes[role], req.url));
    }
  }

  // Redirect from home to appropriate dashboard
  if (
    userId &&
    req.nextUrl.pathname === "/" &&
    sessionClaims?.metadata?.onboardingCompleted
  ) {
    const role = sessionClaims.metadata.role as string;
    const roleRoutes: Record<string, string> = {
      ADMIN: '/admin',
      EMPLOYEE: '/employee',
      MANAGER: '/manager',
      MAGASINIER: '/magasinier',
      CHEFUSINE: '/chefusine',
      CHEFEQUIPE: '/chefequipe',
      CHEFQUALITE: '/chefqualite',
      COMMERCIAL: '/commercial',
    };
    
    if (role && roleRoutes[role]) {
      return NextResponse.redirect(new URL(roleRoutes[role], req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
