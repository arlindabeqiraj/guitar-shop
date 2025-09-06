import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import acceptLanguage from "accept-language";

const locales = ["en", "sq"];
const defaultLocale = "en";

acceptLanguage.languages(locales);

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    let lang =
      req.cookies.get("NEXT_LOCALE")?.value ||
      acceptLanguage.get(req.headers.get("Accept-Language")) ||
      defaultLocale;

    if (!locales.includes(lang)) lang = defaultLocale;

    const response = NextResponse.redirect(
      new URL(`/${lang}${pathname}`, req.url)
    );

    response.cookies.set("NEXT_LOCALE", lang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
