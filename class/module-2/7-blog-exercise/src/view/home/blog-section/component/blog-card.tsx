import { IBlog } from "@/interface/blog.interface";
import Image from "next/image";

import { BiShareAlt } from "react-icons/bi";
import { BiWifi0 } from "react-icons/bi";

interface BlogCardProps {
  blog: IBlog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const {
    title,
    authorName,
    publishDate,
    description,
    thumbnail,
    authorImage,
  } = blog.fields;

  console.log("thumbnail:", blog.fields.thumbnail);

  return (
    <article>
      {thumbnail?.fields?.file?.url && (
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt={`Thumbnail ${title}`}
          width={400}
          height={250}
          className="mb-4 h-60 w-full rounded object-cover"
        />
      )}

      <div className="flex flex-col gap-7">
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {authorImage?.fields?.file?.url && (
              <Image
                src={`https:${authorImage.fields.file.url}`}
                alt={`Foto ${authorName}`}
                width={40}
                height={40}
                className="rounded object-cover"
              />
            )}
            <p className="text-base md:text-base lg:text-lg text-gray-900 font-bold">{authorName}</p>
          </div>

          <hr className="w-8 border-0 border-t border-gray-600 opacity-40" />

          <p className="text-sm md:text-base lg:text-base text-gray-600">{publishDate}</p>

          <div className="flex items-center gap-1">
            <BiShareAlt className="text-gray-600" />
            <p className="text-base text-gray-600">1K</p>
            <p className="text-base text-gray-600">shares</p>
          </div>
        </div>
        <p className="text-xl text-gray-600">{description}</p>
      </div>
    </article>
  );
}
