import Link from "next/link";
import { LikeButton } from "./LikeButton";

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60 //TODO: cada minuto refresca los datos
    }
  })
    .then((response) => response.json())
}

export default async function PostsPage() {
  const posts = await fetchPosts();
  return (
    <section>
      {posts.map((post) => (
        <article key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
          </Link>
        </article>
      ))}
      </section>
  )
}

