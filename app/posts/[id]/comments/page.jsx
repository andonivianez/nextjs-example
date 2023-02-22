const fetchComments = async(id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // fetch single post
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60 //TODO: cada minuto refresca los datos
    }
  })
    .then((response) => response.json())
}

export default async function CommentsPostPage({params}) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul style={{fontSize: '12px'}}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
          <p>{comment.email}</p>
        </li>
      ))}
    </ul>
  )
}

