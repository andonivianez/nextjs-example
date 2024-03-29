import Link from "next/link";

const fetchSinglePost = (id) => {
  // fetch single post
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60 //TODO: cada minuto refresca los datos
    }
  })
    .then((response) => response.json())
}

export default async function PostPage({ children, params}) {
  const { id } = params;
  const post = await fetchSinglePost(id);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}

