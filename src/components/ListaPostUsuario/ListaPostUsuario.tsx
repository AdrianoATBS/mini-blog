
import { Post } from "@/types/Post";
import { User } from "@/types/User";
import PostCardUsuario from "../PostCardUsuario/PostCardUsuario";
import PostCardDestaque from "../PostCardDestaque/PostCardDestaque";

export default function ListaPostUsuario({ posts, user }: { posts: Post[], user: User }) {
    
    return(
        <> 
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">

            <div className="flex flex-col items-start gap-2 text-center">
                <h2 className="titulo-secao">
                    Postagens de 
                    <span className="text-acoes-primaria"> {user.name}</span>
                    <div className="border-b-8 rounded-2xl border-acoes-primaria w-10 mb-2"></div>
                </h2>
                
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 grid-flow-dense">
                    <div className="hidden lg:block lg:col-span-2">
                        <PostCardDestaque post={posts[0]} />
                    </div>
                   
                    
                    {posts.slice(1).map((post) => (
                        <PostCardUsuario
                            key={post.id}
                            posts={post}
                           
                        />
                    ))}
                </div>

            </div>

        </div>
        </>
        
    )
}