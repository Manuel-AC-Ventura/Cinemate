import { Head } from "@inertiajs/react";
import { Header } from "@/Components/Room/Header";
import { Seats } from "@/Components/Room/Seats";

export default function Room({ id, title, session, seats }){
  const movieData = { id, title, session, seats }

  return(
    <div className="w-full min-h-screen bg-[#1a2232] flex gap-0 flex-col">
      <Head title={title} />
      <Header movieData={movieData}/>
      <Seats movieData={movieData} />
    </div>
  )
}