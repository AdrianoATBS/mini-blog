
import PostDetalhe from "@/components/PostDetalhe/PostDetalhe";
import ListaComentarios from "@/components/PostDetalhe/ListaComentario";
import { comentariosMock } from "@/mocks/comentarios.mock";
import { getPostById } from "@/service/posts.service";
import { getUsers } from "@/service/users.service";
import { getCommentsByPostId } from "@/service/comments.service";
import { User } from "@/types/User";

export default async function PostPage({params}: {params: Promise<{id: string}>}) 
{

    const {id} = await params;
    const postId = Number(id);

    const post = await getPostById(postId);
    if(!post) return <p>Post não encontrado</p>;
    
    const users: User[] = await getUsers();
    const user = users.find(u => u.id === post.userId);
    const comentariosDoPost = await getCommentsByPostId(postId);

    return(
        <>
            <PostDetalhe post={post} user={user} />
            <ListaComentarios comentarios={comentariosDoPost} />
            
        </>
    )
}