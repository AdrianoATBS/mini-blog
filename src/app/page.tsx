import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Image from "next/image";
import PostCard from "@/components/PostCard/PostCard";
export default function Home() {
  return (
     <div>
        <Cabecalho />
        <PostCard/>
     </div>
  );
}
