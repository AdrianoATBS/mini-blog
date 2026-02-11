import { getPosts } from "@/service/posts.service";
import { getUsers } from "@/service/users.service";
import PerfilCabecalho from "@/components/PerfilCabecalho/PerfilCabecalho";
import ListaPostUsuario from "@/components/ListaPostUsuario/ListaPostUsuario";
import { User } from "@/types/User";
import { Post } from "@/types/Post";

export default async function UserPage({params}: {params:Promise<{id: string}>}) {
    
    const {id} = await params;

    const users: User[] = await getUsers();
    const posts: Post[] = await getPosts();

    const user = users.find((user) => user.id === parseInt(id));
    const postsDoUsuario = posts.filter((post) => post.userId === parseInt(id));



    if (!user) return <h1>Usuário não encontrado</h1>

    return(
        <>
            <div className="max-full w-full pt-8 pl-9 pr-9 ">
                <PerfilCabecalho user={user} />
            
            </div>

            <div >
                <ListaPostUsuario posts={postsDoUsuario} user={user} />
            </div>
        </>
    )
}