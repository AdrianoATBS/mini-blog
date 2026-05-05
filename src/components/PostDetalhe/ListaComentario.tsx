"use client"
import {Comentario} from "@/types/Comentario";
import { FaRegUserCircle } from "react-icons/fa";
import Botao from "../Botao/Botao";
import { User } from "@/types/User";
import { useState } from "react";
export default function ListaComentarios({comentarios, user}: {comentarios: Comentario[], user: User})
{
    const quantidadeComentarios = comentarios.length;
    
    const [mostrarTodos, setMostrarTodos] = useState(false);
    const comentariosVisiveis = mostrarTodos ? comentarios : comentarios.slice(0, 3);
    const quantidadeComentariosRestantes = quantidadeComentarios - 3;
    
    return(
       <div className="max-w-4xl mx-auto px-6 py-10">
            <h2 className="titulo-secao">Comentários ({quantidadeComentarios})</h2>

            <div className="p-4 border border-borda flex  gap-4 rounded-xl mb-8 mt-4 h-48 bg-card  shadow-lg">
                <div className="flex items-center justify-center 
                min-w-[40px] h-[40px] bg-[#F2F4F6] rounded-full">

                    <FaRegUserCircle className=" text-acoes-primaria "  size={24}/>
                </div>
                
                <div className="w-full flex flex-col ">
                    
                    <textarea 
                    placeholder="Participe da discussão..." className="
                    w-full h-28 border border-borda rounded-xl bg-[#F2F4F6] p-3 resize-none
                    focus:outline-none text-texto-secundario
                    " />

                    <Botao texto="Postar comentário" className="mt-4 self-end w-fit cursor-pointer shadow-lg
                    active:scale-95 
                    " />
                </div>
            </div>
            <div className="flex flex-col gap-6">
                {comentariosVisiveis.map((comentario) => (
                    <div key={comentario.id}  className="flex items-start gap-4">
                        <div className="flex items-center justify-center 
                        min-w-[40px] h-[40px]">
                            <FaRegUserCircle className=" text-acoes-primaria "  size={24}/>

                        </div>
                        
                        <div className="bg-[#F2F4F6] border border-borda rounded-xl
                            p-6 shadow-sm flex flex-col gap-3">
                            <h3 className="font-medium text-titulo">{user?.username}</h3>
                            <p className="texto-base text-texto-secundario ">{comentario.body}</p>
                        </div>
                    </div>
                ))}
                {comentarios.length > 3 && (
                    <button 
                        onClick={() => setMostrarTodos(!mostrarTodos)}
                        className="text-acoes-primaria
                         hover:text-acoes-secundaria transition-colors duration-200 
                         cursor-pointer self-center mt-4 bg-[#E6E8EA] px-4 py-2 rounded-full shadow-md"

                    >
                        {mostrarTodos ? `Carregar menos ${quantidadeComentariosRestantes} comentários` 
                        : `Carregar mais ${quantidadeComentariosRestantes} comentários`}
                    </button>
                )}
            </div>

       </div>
    )
}