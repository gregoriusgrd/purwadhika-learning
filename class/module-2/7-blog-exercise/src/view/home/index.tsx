"use client";

import { useState, useEffect } from "react";
import BlogSection from "./blog-section";
import Hero from "./hero";
import { IBlog } from "@/interface/blog.interface";
import { fetchBlogService } from "@/service/blog.service";

export default function HomeView() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    async function getBlogs() {
      const data = await fetchBlogService();
      if (data) {
        setBlogs(data);
      }
    }
    getBlogs();
  }, []);

  return (
    <main>
      <Hero />
      <BlogSection blogs={blogs} />
    </main>
  );
}