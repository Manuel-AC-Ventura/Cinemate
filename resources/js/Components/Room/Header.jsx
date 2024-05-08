import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { IoCalendar } from "react-icons/io5";
import { MdWatchLater } from 'react-icons/md';
import { IoIosArrowBack } from "react-icons/io";

export const Header = ({ movieData }) => {
  const { id, movie, session } = movieData;
  const { cinema, time } = session;
  const currentDate = format(new Date(), "MMMM, dd", { locale: enUS });

  return(
    <header className="w-full flex pt-5 pb-3 gap-1 flex-col items-center bg-[#1d2638]">
      <nav className="w-full flex py-3 px-10">
        <a href={`/movie/${id}`} className="flex-[1]">
          <IoIosArrowBack size={30} color="637394" />
        </a>
        <div className="flex-[11] flex flex-col gap-3">
          <h1 className="text-center text-white text-2xl font-semibold">{cinema}</h1>
          <h2 className="text-center text-[#637394] ">{movie}</h2>
        </div>
      </nav>

      <nav className='w-full flex gap-5 py-3 px-5 items-center'>
        <div className='w-full flex gap-2 py-2 items-center justify-center rounded-lg border-2 border-[#25334e]'>
          <IoCalendar color='637394' size={30} />
          <span className='text-white font-semibold'>{currentDate}</span>
        </div>
        <div className='w-full flex gap-2 py-2 items-center justify-center rounded-lg border-2 border-[#25334e]'>
          <MdWatchLater color='637394' size={30} />
          <span className='text-white font-semibold'>{time}</span>
        </div>
      </nav>
    </header>
  )
}
