import BlogCard from "@/components/blog/blog-card";
import { IBlog } from "@/interface/blog.interface";

interface BlogSectionProps {
  blogs: IBlog[];
}

export default function BlogSection({ blogs }: BlogSectionProps) {
  return (
    <section>
      {blogs.map((blog) => (
        <BlogCard key={blog.sys.id} blog={blog} />
      ))}
    </section>
  );
}
