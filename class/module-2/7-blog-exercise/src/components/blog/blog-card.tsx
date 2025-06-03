import { IBlog } from "@/interface/blog.interface";


interface BlogCardProps {
  blog: IBlog
}

export default function BlogCard({blog}: BlogCardProps) {
  const { title, authorName, publishDate, description } = blog.fields;

  return (
    <article>
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{authorName}</p>
      <p>{publishDate}</p>
      <p>{description}</p>
    </article>
  )
}