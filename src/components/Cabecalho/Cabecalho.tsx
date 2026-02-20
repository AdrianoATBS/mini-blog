'use client';
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Botao from "../Botao/Botao";
export default function Cabecalho() {

    const userRouter = useRouter();




    return (
        <>
            <header className="w-full bg-card border-b border-borda">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                    <div className="flex-[1.9]">
                        <h1 className="titulo-secao">Mini Blog</h1>
                    </div>

                    <div className="relative w-64">

                        <input
                            type="text"
                            placeholder="Pesquisa..."
                            className="w-full px-4 py-2 pr-11 border border-borda rounded-lg 
                            focus:outline-none focus:ring-1 focus:ring-acoes-primaria 
                            texto-base"
                        />
                    
                        <CiSearch
                            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-acoes-primaria cursor-pointer"
                        />
                    </div>  
                    <div className="flex gap-4 pl-4">
                        <Botao texto="Registrar" onClick={() => userRouter.push("/register")} />
                        <Botao texto="Login" onClick={() => userRouter.push("/login")} />
                    </div>
                   
                </div>

            </header>
        </>
    );
}
