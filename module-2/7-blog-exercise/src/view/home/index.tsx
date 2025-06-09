"use client";

import { useState, useEffect } from "react";
import { IBlog } from "@/interface/blog.interface";
import { fetchBlogService } from "@/service/blog.service";

import BlogSection from "./blog-section";
import HeroSection from  "./hero-section"
import TravelSection from "./travel-section";

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
      <HeroSection />
      <BlogSection blogs={blogs} />
      <TravelSection />
    </main>
  );
}