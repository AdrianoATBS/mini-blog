'use client';
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Botao from "../Botao/Botao";
export default function Cabecalho() {

    const userRouter = useRouter();

    return (
        <>
            <header className="w-full bg-card border-b border-borda sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                    <div className="flex items-center gap-8">
                        <h1 className="titulo-secao tracking-tight">Mini <span className="text-acoes-primaria">Blog</span></h1>
                        
                        <h2 className="texto-base text-texto-secundario cursor-pointer hover:text-texto-primario transition duration-200"
                            onClick={() => userRouter.push("/")}>Início</h2>
                        <h2 className="texto-base text-texto-secundario cursor-pointer hover:text-texto-primario transition duration-200"
                            onClick={() => {
                                const idAleatorio = Math.floor(Math.random() * 100) + 1; 
                                userRouter.push(`/posts/${idAleatorio}`); 
                            }}>Posts</h2>
                    </div>


                    <div className="flex items-center gap-6">

                        <div className="relative w-48">

                            <input
                                type="text"
                                placeholder="Pesquisa..."
                                className="w-full h-10 pl-4 pr-10 border border-borda rounded-2xl bg-fundo-secundario
                                texto-base focus:outline-none focus:ring-1 focus:ring-acoes-primaria
                                "
                                />
                        
                            <CiSearch
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-texto-secundario cursor-pointer"
                                />
                        </div>  
                        <div className="flex gap-3 ">
                            <Botao texto="Registrar" onClick={() => userRouter.push("/register")} 
                                className="text-acoes-primaria border-none cursor-pointer 
                                "
                                semBackground={true}
                                semHover={true}
                                semRing={true}
                                semWhite={true}
                                />
                            <Botao texto="Login" onClick={() => userRouter.push("/login")} 
                                className="cursor-pointer"/>
                        </div>
                    </div>
                   
                </div>

            </header>
        </>
    );
}
