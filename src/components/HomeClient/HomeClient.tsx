'use client'
import PostCard from "@/components/PostCard/PostCard";
import { useState } from "react";
import Botao from "@/components/Botao/Botao";
import { Post } from "@/types/Post";
import { User } from "@/types/User";
import PostCardDestaqueSimples from "../PostCardDestaqueSimples/PostCardDestaqueSimples";
import PostCardDestaqueCompleto from "../PostCardDestaqueCompleto/PostCardDestaqueCompleto";

export default function HomeClient({posts, users}: {posts: Post[], users: User[]}) {

   const [paginaAtual, setPaginaAtual] = useState(1);
   const postsPorPagina = 9;

   const indiceUltimoPost = paginaAtual * postsPorPagina;
   const indicePrimeiroPost = indiceUltimoPost - postsPorPagina;
    const postsAtuais = posts.slice(indicePrimeiroPost, indiceUltimoPost);

   const totalPaginas = Math.ceil(posts.length / postsPorPagina);

   const destaque = postsAtuais[0];
   const simpels = postsAtuais.slice(1, 3);
   const completo = postsAtuais.slice(3);

  return (
     <div >

      <main className="max-w-screen mx-auto px-6 py-12 flex flex-col gap-10">

         <div className="flex flex-col gap-2
        ">
            <h2 className="titulo-principal font-bold ">
               Últimos Posts
            </h2>
           <div className="h-1 w-14 rounded-2xl bg-acoes-primaria"></div>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <PostCard
            key={destaque.id}
            post={destaque}
            autor={users.find((user) => user.id === destaque.userId)?.name || "Autor Desconecido"}
            userId={destaque.userId}
            postId={destaque.id}
            />
        {simpels.map((post) =>
         {
            const user = users.find((user) => user.id === post.userId);
            return(
               <PostCardDestaqueSimples
                  key={post.id}
                  post={post}
                  autor={user ? user.name : "Autor Desconhecido"}
                  userId={post.userId}
                  postId={post.id}
               />
            )
            
         })}
      
         {completo.map((post) => {
            const user = users.find((user) => user.id === post.userId);
            return(
                  <PostCardDestaqueCompleto
                  key={post.id}
                  post={post}
                  autor={user ? user.name : "Autor Desconhecido"}
                  userId={post.userId}
                  postId={post.id}
                  />
            )
         })}
         </div>
         <div className=" flex justify-center items-center gap-6 mt-6">

            <Botao texto="Anterior" onClick={() => setPaginaAtual(paginaAtual - 1)} disabled={paginaAtual === 1} />
            <span className="texto-base">
               Página  
               <span className="font-semibold text-acoes-primaria"> {paginaAtual}</span> de {totalPaginas}
               </span>

            <Botao texto="Próxima" onClick={() => setPaginaAtual(paginaAtual + 1)} 
            disabled={paginaAtual === totalPaginas} />
         </div>
      </main>
     </div>
  );
}
