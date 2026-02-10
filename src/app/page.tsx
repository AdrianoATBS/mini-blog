import Cabecalho from "@/components/Cabecalho/Cabecalho";
import HomeClient from "@/components/HomeClient/HomeClient";
import { getPosts } from "@/service/posts.service";
import { getUsers } from "@/service/users.service";
export default async function Home() {

   const posts = await getPosts();
   const users = await getUsers();

  return (
     <div >
        <Cabecalho />
         <HomeClient posts={posts} users={users} />
      
     </div>
  );
}
