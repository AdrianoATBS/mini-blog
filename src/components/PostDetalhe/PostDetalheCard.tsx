import {Post} from "@/types/Post";
import {User} from "@/types/User";
export default function PostDetalheCard({post, user}: {post: Post | undefined, user: User | undefined }) {
    return(
        <div >
            <div className="bg-card border border-borda rounded-2xl p-10
            shadow-sm flex flex-col gap-6">
                <span className="texto-suave">Publicado por{" "} 
                    <span className="font-medium text-acoes-primaria">{user?.name}</span>
                </span>

                <h1 className="titulo-principal">
                    {post?.title}
                </h1>

                <p className="texto-base leading-8">
                    {post?.body}
                </p>
            </div>
            
        </div>
    )
}