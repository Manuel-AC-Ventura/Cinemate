import { Trailer } from "./Trailer"

export const About = ({ movie, trailer, director, credits, setActiveTab }) => {
  const { backdrop_path, vote_average, vote_count, overview, runtime, release_date, genres } = movie;
  const releaseYear = release_date ? new Date(release_date).getFullYear() : '';
  const limitedGenres = genres.slice(0, 3);
  const mainCast = credits.cast.slice(0, 5);

  return(
    <div className='w-full flex flex-col'>
      <Trailer 
        trailer={trailer} 
        backdropPath={backdrop_path} 
      />

      <div className="w-full bg-[#1d2638] flex items-center justify-around">
        <div className="w-full flex gap-2 py-3 flex-col items-center justify-center border-r border-[#1f2a3e]">
          <h2 className="text-white text-xl font-bold">{vote_average.toFixed(1)}</h2>
          <span className="text-[#637394]">TMDB</span>
       </div>
       <div className="w-full flex gap-2 py-3 flex-col items-center justify-center">
          <h2 className="text-white text-xl font-bold">{vote_count}</h2>
          <span className="text-[#637394]">Kinopoisk</span>
        </div>
      </div>

      <div className="flex gap-3 flex-col p-4">
        <p className='text-white'>{overview}</p>
        
        <ul className="flex gap-3 flex-col">
          <li className="flex gap-2">
            <span className="text-[#5a6988]">Runtime:</span>
            <span className="text-white">{runtime}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#5a6988]">Release:</span>
            <span className="text-white">{releaseYear}</span>
          </li>
          <li className="flex gap-2 overflow-hidden">
            <span className="text-[#5a6988]">Genre:</span>
            {limitedGenres.map((genre, index) => (
              <span key={index} className="text-white">{genre.name}{index < limitedGenres.length - 1 ? ',' : ''}</span>
            ))}
          </li>
          <li className="flex gap-2">
            <span className="text-[#5a6988]">Credits:</span>
            <span className="text-white">
              {mainCast.map((castMember, index) => (
                <span key={index}>{castMember.name}{index < mainCast.length - 1 ? ', ' : ''}</span>
              ))}
            </span>
          </li>
        </ul>
        <button 
          onClick={() => setActiveTab('Sessions')}
          className="w-full text-white text-xl font-semibold rounded-xl bg-gradient-to-b from-[#FF8036] to-[#FC6D19] py-3 mt-5 mb-10"
          >Select session</button>
      </div>
    </div>
  )
}
