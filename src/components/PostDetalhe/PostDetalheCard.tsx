import {Post} from "@/types/Post";
import {User} from "@/types/User";
export default function PostDetalheCard({post, user}: {post: Post | undefined, user: User | undefined }) {
            return(
        <>
            <div className="flex justify-center items-center flex-col p-6 m-6 border border-gray-300 rounded-lg shadow-md 
            max-w-xl w-full">
                <h2 className="text-xl mb-3 text-titulo font-[--fonte-texto-geral] text-left w-full">{user?.name}</h2>
                <p className="text-lg text-texto-principal font-[--fonte-texto-geral]">{post?.title}</p>
                <p className="mt-2 text-texto-secundario font-[--fonte-texto-geral]">{post?.body}</p>
            
            </div>
        </>
    )
}