import { IBlog } from "@/interface/blog.interface";
import Image from "next/image";

interface BlogCardProps {
  blog: IBlog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const { title, authorName, publishDate, description, thumbnail, authorImage } =
    blog.fields;

  console.log("thumbnail:", blog.fields.thumbnail);

  return (
    <article>
      {thumbnail?.fields?.file?.url && (
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt={`Thumbnail ${title}`}
          width={400}
          height={250}
          className="w-full h-60 object-cover rounded mb-4"
        />
      )}
      <div>
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>

        <div>
          {authorImage?.fields?.file?.url && (
            <Image
              src={`https:${authorImage.fields.file.url}`}
              alt={`Foto ${authorName}`}
              width={40}
              height={40}
              className="object-cover rounded mb-4"
            />
          )}
          <p className="text-2xl text-gray-900">{authorName}</p>
          <p className="text-lg text-gray-600">{publishDate}</p>
        </div>

        <p className="text-gray-600 text-xl">{description}</p>
      </div>
    </article>
  );
}
