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
        <section className="flex flex-col bg-card rounded-xl border border-borda col-span-2 row-span-2 
        shadow-lg ">
            <Link href={`/posts/${postId}`} className="w-full h-full ">
                <Image src={imageUrl} alt="Imagem do post" width={600} height={300} 
                className="w-full h-80 object-cover rounded-t-lg"/>
                <h2 className="titulo-card pl-4 pt-4 hover:text-acoes-primaria">{post.title}</h2>
                <p className="texto-base text-texto-secundario p-4">{post.body}</p>
            </Link>

            <Link href={`/users/${userId}`} className="text-xs text-texto-secundario mt-4 block titulo-card
                    hover:text-acoes-primaria transition duration-400 cursor-pointer p-4">
                {autor}
            </Link>
    </section>
    )
}