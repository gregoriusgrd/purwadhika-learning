import { IBlog } from "@/interface/blog.interface";
import Image from "next/image";

interface BlogCardProps {
  blog: IBlog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const { title, authorName, publishDate, description, thumbnail } =
    blog.fields;

    console.log("thumbnail:", blog.fields.thumbnail);

  return (
    <article>
      {thumbnail?.fields?.file?.url && (
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt={title}
          width={400}
          height={250}
          className="w-full h-60 object-cover rounded mb-4"
        />
      )}
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{authorName}</p>
      <p>{publishDate}</p>
      <p>{description}</p>
    </article>
  );
}
