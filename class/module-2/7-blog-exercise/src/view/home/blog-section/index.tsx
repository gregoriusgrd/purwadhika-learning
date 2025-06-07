import BlogCard from "@/components/blog/blog-card";
import { IBlog } from "@/interface/blog.interface";

// social-icons
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";

interface BlogSectionProps {
  blogs: IBlog[];
}

export default function BlogSection({ blogs }: BlogSectionProps) {
  return (
    <main className="bg-white">
      <div className="flex">
        <div className="flex items-center">
          <BiLogoFacebook className="text-black"/>
          <span className="text-black">3.7 M</span>
        </div>

        <div className="flex items-center">
          <BiLogoInstagramAlt className="text-black"/>
          <span className="text-black">2.4 M</span>
        </div>

        <div className="flex items-center">
          <BiLogoTwitter className="text-black"/>
          <span className="text-black">3.7 M</span>
        </div>

        <div className="flex items-center">
          <BiLogoYoutube className="text-black"/>
          <span className="text-black">2.4 M</span>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.sys.id} blog={blog} />
        ))}
      </section>
    </main>
  );
}
