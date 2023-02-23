import Image from "next/image";

const fetchComments = async(id) => {
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  //throw new Error('Error de prueba');
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
          <Image src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} alt={comment.name} width={80} height={80} />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
          <p>{comment.email}</p>
        </li>
      ))}
    </ul>
  )
}

