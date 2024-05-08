import { useState } from 'react';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { FaSort } from "react-icons/fa";
import { Switch } from '@/components/ui/switch';
import { IoCalendar } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { router } from '@inertiajs/react'

export const Sessions = ({ id, title, sessions }) => {
	const [isClicked, setIsClicked] = useState(false);
  const clients = ["Adult", "Child", "Student", "VIP"];
  const currentDate = format(new Date(), "MMMM, dd", { locale: enUS });

  const handleRoom = (session)=>{
    router.post('/room', {
      id: id,
      title: title,
      session: session
    })
  }

	const toggleTime = () => {
		setIsClicked(!isClicked);
		sessions.reverse();
	}

  return (
    <div className="">
      <ul className="bg-[#1F293D] text-white font-semibold flex py-5 items-center justify-around">
        <li className="flex gap-2 flex-col items-center justify-center">
          <IoCalendar color="637394" size={30} />
          <span>{currentDate}</span>
        </li>
        <li onClick={()=>toggleTime()} className="flex gap-2 flex-col items-center justify-center">
          <FaSort color="637394" size={30} />
          <div className='flex gap-1 items-center'>
            <span>Time</span>
						{isClicked ? <FaArrowDown color='FFF' /> : <FaArrowUp color='FFF' />}
          </div>
        </li>
        <li className="flex gap-2 flex-col items-center justify-center">
          <Switch />
          <span>By cinema</span>
        </li>
      </ul>

      <ul className='w-full flex py-2 items-center justify-around text-[#637394] bg-[#253554]'>
        <li>Time</li>
        <ul className='flex gap-5 items-center justify-between'>
          {clients.map((client, index)=>(
            <li key={index}>{client}</li>
          ))}
        </ul>
      </ul>

      <ul className='flex flex-col pb-5'>
        {sessions.map((session, index) =>
          <li key={index} onClick={()=>handleRoom(session)} className='flex items-center gap-10 py-3 px-8 border-b border-[#2a3958]'>
            <span className='flex-[1] border-r pr-6 border-[#637394] text-white text-md font-semibold'>{session.time}</span>
            <ul className='flex-[11]'>
              <li className='text-white py-1 text-md font-semibold'>{session.cinema}</li>
              <ul className='flex items-center justify-between'>
                {Object.values(session.prices).map((value, index) => (
                  <li className='text-white' key={index}>
                    {value !== null ? value : <span className='text-[#637394] text-xl font-semibold'>.</span>}
                  </li>
                ))}
              </ul>
            </ul>
          </li>
        )}
      </ul>
    </div>
  )
}
