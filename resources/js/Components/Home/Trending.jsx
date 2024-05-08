export function Trending({ movies }){
  return(
    <div className="grid px-4 gap-4 grid-rows-10 grid-flow-col">
      {movies.map((movie, index)=> (
        <a href={`/movie/${movie.id}`} key={index} className="relative rounded-md overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/0 blur-md z-10"></div>
          <img 
            alt={movie.title}
            className="h-64 w-full object-cover"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          />
          <div className="absolute top-2 right-3 w-10 rounded-md text-center bg-gradient-to-b from-[#FF8036] to-[#FC6D19]">
            <span className="text-white">{movie.vote_average.toFixed(1)}</span>
          </div>
          <h2 className="text-white text-lg font-semibold z-20 relative">{movie.title}</h2>
        </a>
      ))}
    </div>
  )
}