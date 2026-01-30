import { Post } from "@/types/Post";
import { User } from "@/types/User";
import PostCardUsuario from "../PostCardUsuario/PostCardUsuario";


export default function ListaPostUsuario({ posts, user }: { posts: Post[], user: User }) {
    return(
        <> 
            <h2 className="text-xl font-semibold mb-4 pt-2 text-center font-[--fonte-titulo]">Posts do Usuário</h2>
            <div className="grid grid-cols-3 max-w-full w-full pt-8 pl-9 gap-4">
             {posts.map(post => (
                   <div key={post.id} className="text-texto-secundario font-[--fonte-texto-geral] ">
                    <PostCardUsuario posts={post} autor={user.name} /></div>
                ))}
            </div> 
        </>
        
    )
}