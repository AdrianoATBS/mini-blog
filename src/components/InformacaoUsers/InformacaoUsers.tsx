import { UserPerfil } from "../../types/UserPerfil";
import Link from "next/link";
import Image from "next/image";

import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { Post } from "@/types/Post";
export default function InformacaoUsers({ user, posts }: { user: UserPerfil; posts: Post[] }) {
    return(
        <section className="bg-card border border-borda rounded-2xl p-8 shadow-sm flex flex-col gap-8">
            <div className="flex justify-between items-start gap-6">

                <div className=" flex justify-center items-center w-30 h-30 bg-gray-300/45 rounded-xl relative">  
                    <Image src="/UserAvatar.png" alt="Avatar do usuário" width={120} height={120} className="rounded-xl" />
                    
                    <div className=" flex justify-center items-center
                     bg-acoes-primaria w-7 h-7 rounded-xl absolute -bottom-3 -right-3 ">
                        <FaCheckCircle className="text-white" size={22} />   
                        
                    </div>
                    
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <h3 className="texto-suave text-acoes-primaria bg-fundo-secundario w-fit rounded-lg px-2 ">Colaborador Editorial</h3>
                    <h2 className="titulo-principal">{user.name}</h2>

                    <div className="flex flex-wrap items-center gap-4 ">
                        <FaRegBuilding className="text-acoes-primaria" size={20} />
                        <p className="texto-suave">{user.company.name}</p>

                        <MdOutlineEmail className="text-acoes-primaria" size={20} />
                        <span className="texto-suave">{user.email}</span>

                        <FaPhoneAlt className="text-acoes-primaria" size={20} />
                        <span className="texto-suave">{user.phone}</span>

                        <TbWorld className="text-acoes-primaria" size={20} />
                            <Link href={`https://${user.website}`} target="_blank" rel="noopener noreferrer"
                            className="texto-base text-acoes-primaria hover:underline">{user.website}</Link>
                        <p className="texto-suave">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum dolor fugiat non sint doloribus blanditiis ut, perferendis recusandae a
                            d officia nemo aliquam voluptates culpa reprehenderit delectus vel. At, voluptatibus.</p>

                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="bg-gray-100 rounded-xl px-4 py-2 text-center">
                        <p className="font-bold">{posts.length}</p>
                        <span className="texto-suave">Posts</span>
                    </div>
                    <div className="bg-gray-100 rounded-xl px-4 py-2 text-center"   >
                        <p className="font-bold">8.2k</p>
                        <span className="texto-suave">Seguidores</span> 
                    </div>
                </div>
                    
            </div>

        </section>

    )
}