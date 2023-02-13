import { LikeButton } from "./LikeButton";

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
}

export default async function PostsPage() {
  const posts = await fetchPosts();
  return (
    <section>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton id={post.id} />
        </div>
      ))}
      </section>
  )
}

