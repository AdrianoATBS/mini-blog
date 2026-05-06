import Link from "next/link";
import { Post } from "@/types/Post";
import Image from "next/image";
interface PostCardProps {
    post: Post;
    autor: string;
    userId: number;
    postId: number;
}
export default function PostCard({ post, autor, userId, postId }: PostCardProps) {

     const imageUrl = `https://picsum.photos/600/300?random=${post.id}`;
    return(
        <section className="flex flex-col bg-card rounded-xl border
         border-borda shadow-lg
         col-span-1 lg:col-span-2
         ">
            <Link href={`/posts/${postId}`} className="w-full h-full ">
                <Image src={imageUrl} alt="Imagem do post" width={600} height={300} 
                className="w-full h-52 object-cover rounded-t-lg
                md:h-64 lg:h-80"/>
                <div className="p-4 md:p-6">
                    <h2 className="titulo-card hover:text-acoes-primaria mb-3">{post.title}</h2>
                    <p className="texto-base text-texto-secundario">{post.body}</p>
                </div>
            </Link>

            <Link href={`/users/${userId}`} className="text-xs text-texto-secundario mt-4 block titulo-card
                    hover:text-acoes-primaria transition duration-400 cursor-pointer px-4 pb-4 md:px-6 md:pb-6">
                {autor}
            </Link>
    </section>
    )
}