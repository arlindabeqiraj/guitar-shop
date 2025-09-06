import "./globals.css";
import ApolloWrapper from "@/lib/apollo/Provider";
import Footer from "./(shared)/components/Footer";
import Logo from "./(shared)/components/Logo";
import Link from "next/link";
import I18nProvider from "../../i18n/I18nProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <I18nProvider>
          <ApolloWrapper>
            {/* Logo në top-left */}
            <div className="absolute top-6 left-10 z-50">
              <Link href="/brands">
                <Logo />
              </Link>
            </div>

            {/* Content */}
            <main>{children}</main>

            {/* Footer */}
            <Footer />
          </ApolloWrapper>
        </I18nProvider>
      </body>
    </html>
  );
}
