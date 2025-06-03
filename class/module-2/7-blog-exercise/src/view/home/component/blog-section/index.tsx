import BlogCard from "@/components/blog/blog-card";
import { IBlog } from "@/interface/blog.interface";

interface BlogSectionProps {
  blogs: IBlog[];
}

export default function BlogSection({ blogs }: BlogSectionProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogs.map((blog) => (
        <BlogCard key={blog.sys.id} blog={blog} />
      ))}
    </section>
  );
}
