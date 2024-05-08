import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { router } from '@inertiajs/react';
import { Header } from '@/Components/Payment/Header';
import { useState } from 'react';

export default function Payment({ id, title, cinema, seats, time, tickets, price }){
  const [email, setEmail] = useState();
  const currentDate = format(new Date(), "MMMM dd", { locale: enUS });

  const handleTicket  = (e)=>{
    e.preventDefault();
    
    if(email != '' && email != undefined){
      router.post('/ticket', {
        id,
        title,
        cinema,
        time,
        tickets,
        price,
        email
      })
    }
  }

  return(
    <div className="w-full min-h-screen bg-[#1e283c] flex gap-5 flex-col">
      <Header id={id} />

      <div className='space-y-7'>
        <h2 className='text-white px-4 text-xl font-semibold'>{title}</h2>

        <div className="px-4">
          <ul className='flex py-8 flex-col gap-3 text-white text-lg border-b border-[#637394]'>
            <li className='flex'>
              <span className='text-[#637394] flex-1'>Cinema</span>
              <span className='flex-[3]'>{cinema}</span>
            </li>
            <li className='flex'>
              <span className='text-[#637394] flex-1'>Date</span>
              <span className='flex-[3]'>{currentDate}, {time}</span>
            </li>
            <li className='flex'>
              <span className='text-[#637394] flex-[1]'>Hall</span>
              <span className='flex-[3]'>6th</span>
            </li>
            <li className='flex'>
              <span className='text-[#637394] flex-1'>Seats</span>
              <span className='flex-[3]'>{tickets}</span>
            </li>
          </ul>
        </div>

        <ul className='px-4'>
          {[...Array(seats)].map((_, i) => (
            <li className='text-white space-x-1 font-semibold' key={i}>
              <span className='text-[#637394]'>Adult:</span>
              <span>{(price/seats).toFixed(2)}</span>
            </li> 
          ))}
        </ul>

        <img className='w-full' src='./ticket.svg' alt="ticket" />

        <form onClick={handleTicket}  className='w-full flex flex-col gap-4 px-4'>
          <input 
            type="email"
            value={email}
            placeholder='E-mail address'
            onChange={(e)=>setEmail(e.target.value)}
            className='bg-[#1e283c] text-white py-4 px-5 rounded-lg border border-[#273550] outline-none' 
          />
          <button 
            className='py-4 rounded-lg text-white font-semibold text-xl bg-gradient-to-b from-[#FF8036] to-[#FC6D19]'>
              Continue
          </button>
        </form>
      </div>
    </div>
  )
}
