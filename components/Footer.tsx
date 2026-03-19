// components/Footer.tsx
// Server Component: footer estático con año dinámico de siteConfig.

import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700 py-6 mt-auto">
      <div className="w-[90%] max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-400">
          © {siteConfig.year} {siteConfig.name} — {siteConfig.author}
        </p>
      </div>
    </footer>
  );
}