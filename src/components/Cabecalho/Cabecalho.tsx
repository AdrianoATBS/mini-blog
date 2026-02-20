'use client';
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Botao from "../Botao/Botao";
export default function Cabecalho() {

    const userRouter = useRouter();




    return (
        <>
            <header className="w-full bg-card border border-borda">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                    <div className="flex items-center gap-8">
                        <h1 className="titulo-secao tracking-tight">Mini <span className="text-acoes-primaria">Blog</span></h1>
                    </div>

                    <div className="relative w-72">

                        <input
                            type="text"
                            placeholder="Pesquisa..."
                            className="w-full h-10 pl-4 pr-10 border border-borda rounded-lg bg-fundo-secundario
                            texto-base focus:outline-none focus:ring-1 focus:ring-acoes-primaria 
                            "
                        />
                    
                        <CiSearch
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-texto-secundario cursor-pointer"
                        />
                    </div>  
                    <div className="flex gap-3 ">
                        <Botao texto="Registrar" onClick={() => userRouter.push("/register")} />
                        <Botao texto="Login" onClick={() => userRouter.push("/login")} />
                    </div>
                   
                </div>

            </header>
        </>
    );
}
