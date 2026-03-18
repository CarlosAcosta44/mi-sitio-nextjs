// components/BlogCard.tsx
// Tarjeta reutilizable con next/image, Link de Next.js y layout flex responsivo.

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-sm text-gray-500 mb-1">{post.date}</p>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm flex-1">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 text-blue-500 hover:text-blue-700 font-medium text-sm"
        >
          Leer más →
        </Link>
      </div>
    </article>
  );
}