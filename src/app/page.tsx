import Cabecalho from "@/components/Cabecalho/Cabecalho";
import HomeClient from "@/components/HomeClient/HomeClient";
import { getPosts } from "@/service/posts.service";
import { getUsers } from "@/service/users.service";
export default async function Home() {

   const posts = await getPosts();
   const users = await getUsers();

  return (
     < >
      <div className="bg-fundo min-h-screen">
        <Cabecalho />
        
         <div className="max-w-7xl mx-auto px-4">
         <HomeClient posts={posts} users={users} />
         </div>
      </div>
      

 
      
     </>
  );
}
