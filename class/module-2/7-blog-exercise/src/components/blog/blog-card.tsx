"use client";

import { IBlog } from "@/interface/blog.interface";
import Image from "next/image";

interface BlogCardProps {
  blog: IBlog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const { title, description, thumbnail, publishDate, authorImage, shares } = blog.fields;

  return (
    <div></div>
  );
}