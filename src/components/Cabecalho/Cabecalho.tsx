'use client';
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Botao from "../Botao/Botao";
export default function Cabecalho() {

    const userRouter = useRouter();




    return (
        <>
            <header className="px-6 py-4 bg-fundo-secundario">
                <div className="flex items-center">

                    <div className="flex-[1.9]" />

                    <div className="relative w-full max-w-56">

                        <input
                            type="text"
                            placeholder="Pesquisa..."
                            className="w-full p-2 pl-5 pr-12 border border-borda rounded-full focus:outline-none 
                            focus:ring-1 focus:ring-acoes-primaria text-xs font-[--fonte-texto-geral]"
                        />
                    
                        <CiSearch
                            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-acoes-primaria cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-1 justify-end gap-3">
                        <Botao texto="Registrar" onClick={() => userRouter.push("/register")} />
                        <Botao texto="Login" onClick={() => userRouter.push("/login")} />
                    </div>
                   
                </div>

            </header>
        </>
    );
}
