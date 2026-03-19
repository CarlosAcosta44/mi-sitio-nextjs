// components/BlogSection.tsx
// Server Component que mapea blogPosts a BlogCard.

import { blogPosts } from "@/lib/data";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Blog
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}