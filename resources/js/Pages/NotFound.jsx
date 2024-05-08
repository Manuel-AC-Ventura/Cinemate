import { Header } from "@/Components/Header";
import { GiPopcorn } from "react-icons/gi";

export default function NotFound(){
  return(
    <div className="w-full min-h-screen bg-[#1A2232] flex gap-5 flex-col">
      <Header />

      <div className="flex gap-2 mt-48 flex-col items-center justify-center">
        <GiPopcorn color="637394" size={60} />
        <h1 className="text-xl text-[#637394] font-semibold">Page not found!</h1>
      </div>
    </div>
  )
}