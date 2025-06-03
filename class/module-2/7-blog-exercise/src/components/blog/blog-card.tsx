"use client";

import { IBlog } from "@/interface/blog.interface";
import Image from "next/image";

interface BlogCardProps {
  blog: IBlog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const { title, description, thumbnail, publishDate, authorImage, shares } = blog.fields;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md">
      {/* Blog Thumbnail */}
      <div className="relative h-60 w-full">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold">{title}</h2>

        {/* Author Info */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          {authorImage && (
            <Image
              src={`https:${authorImage.fields.file.url}`}
              alt="Author"
              width={30}
              height={30}
              className="rounded-full"
            />
          )}
          <p>{publishDate}</p>
          <span>•</span>
          <p>{shares} shares</p>
        </div>

        {/* Blog Description */}
        <p className="text-gray-600">{description}</p>

        {/* View Post Button (non-functional) */}
        <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          View Post
        </button>
      </div>
    </div>
  );
}