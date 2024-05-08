export const Trailer = ({ trailer, backdropPath }) => {
  const backdropUrl = backdropPath ? `https://image.tmdb.org/t/p/original${backdropPath}` : '';

  return (
    <>
      {trailer ? (
        <div className="w-full flex gap-2 flex-col items-center justify-center border-r border-[#1f2a3e]">
          <iframe 
            width="100%" 
            height="250" 
            src={`https://www.youtube.com/embed/${trailer.key}`} 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div 
          className="w-full flex gap-2 flex-col items-center justify-center border-r border-[#1f2a3e]" 
          style={{ 
            backgroundImage: `url(${backdropUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '250px'
          }}
        ></div>
      )}
    </>
  )
}
