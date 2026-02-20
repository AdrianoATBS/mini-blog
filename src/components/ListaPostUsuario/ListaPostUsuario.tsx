import { Post } from "@/types/Post";
import { User } from "@/types/User";
import PostCardUsuario from "../PostCardUsuario/PostCardUsuario";


export default function ListaPostUsuario({ posts, user }: { posts: Post[], user: User }) {
    return(
        <> 
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">

            <div className="flex flex-col gap-2 text-center">
                <h2 className="titulo-seca">
                    Posts de 
                    <span className="text-acoes-primaria"> {user.name}</span>
                </h2>
                <p className="texto-suave">
                    Confira todos os artigos publicados por este usuário.                
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <PostCardUsuario
                            key={post.id}
                            posts={post}
                            autor={user.name}
                        />
                    ))}
                </div>

            </div>

        </div>
        </>
        
    )
}