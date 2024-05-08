import { useState } from "react";
import { About } from "@/Components/Movie/About";
import { Sessions } from "@/Components/Movie/Sessions";
import { MovieTitle } from "@/Components/Movie/MovieTitle";
import { Head } from "@inertiajs/react";

export default function Movie({ movie, trailer, director, credits, sessions }) {
  const sessionsList = sessions.sessions;
  const [activeTab, setActiveTab] = useState('About');

  return (
    <div className="w-full min-h-screen bg-[#1a2232] flex gap-0 flex-col">
      <Head title={movie.title} />
      <MovieTitle title={movie.title} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={`${activeTab === 'About' ? '' : 'hidden'}`}>
        <About movie={movie} trailer={trailer} director={director} credits={credits} setActiveTab={setActiveTab} />
      </div>
      <div className={`${activeTab === 'Sessions' ? '' : 'hidden'}`}>
        <Sessions id={movie.id} title={movie.title} sessions={sessionsList} />
      </div>
    </div>
  )
}