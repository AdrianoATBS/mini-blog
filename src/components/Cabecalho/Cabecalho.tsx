'use client';
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Botao from "../Botao/Botao";
export default function Cabecalho() {
    const [pesquisa, setPesquisa] = useState('');

    const handlePesquisaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPesquisa(event.target.value);
    };

    const handlePesquisaSubmit = () => {
        console.log('Pesquisar por:', pesquisa);
    };

    return (
        <>
            <header className="px-6 py-4 bg-fundo-secundario">
                <div className="flex items-center">
                    <div className="flex-[1.9]" />
                    <div className="relative w-full max-w-56">

                        <input
                            type="text"
                            value={pesquisa}
                            onChange={handlePesquisaChange}
                            placeholder="Pesquisa..."
                            className="w-full p-2 pl-5 pr-12 border border-borda rounded-full focus:outline-none focus:ring-1 focus:ring-acoes-primaria text-xs"
                        />
                    
                        <CiSearch
                            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-acoes-primaria cursor-pointer"
                            onClick={handlePesquisaSubmit}
                        />
                    </div>
                    <div className="flex flex-1 justify-end gap-3">
                        <Botao texto="Registrar"/>
                        <Botao texto="Login"/>
                    </div>
                   
                </div>

            </header>
        </>
    );
}
