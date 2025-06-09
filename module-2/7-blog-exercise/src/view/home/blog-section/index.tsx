import BlogCard from "@/view/home/blog-section/component/blog-card";
import { IBlog } from "@/interface/blog.interface";
import Socials from "./component/socials";

interface BlogSectionProps {
  blogs: IBlog[];
}

export default function BlogSection({ blogs }: BlogSectionProps) {
  return (
    <section className="bg-white px-36 pt-6">
      <div className="socials">
          <Socials />
      </div>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.sys.id} blog={blog} />
        ))}
      </section>
    </section>
  );
}
