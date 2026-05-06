
import HomeClient from "@/components/HomeClient/HomeClient";
import { getPosts } from "@/service/posts.service";
import { getUsers } from "@/service/users.service";
export default async function Home() {

   const posts = await getPosts();
   const users = await getUsers();

  return (
     < >
      <div className="bg-fundo min-h-screen flex flex-col">

      <HomeClient posts={posts} users={users} />

    </div>

     </>
  );
}
