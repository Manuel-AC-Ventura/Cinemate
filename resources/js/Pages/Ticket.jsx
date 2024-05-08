import { format } from 'date-fns';
import QRCode from "react-qr-code";
import { QRCodeCanvas } from 'qrcode.react';
import { enUS } from 'date-fns/locale';
import { FaShare } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Ticket({ id, title, cinema, seats, time, tickets, price }){
  const currentDate = format(new Date(), "MMMM dd yyyy", { locale: enUS });
  const qrCode = { id, title, cinema, currentDate,time, tickets, price};

  return(
    <div className="w-full min-h-screen bg-[#1e283c] flex gap-5 flex-col">
      <header className="w-full h-24 bg-[#1e283c]">
        <nav className="w-full h-full flex items-center justify-between py-3 px-4">
          <h1 className="flex-[2] text-center text-white text-xl font-semibold">Your Ticket</h1>
          <a href="/"><IoClose color="637394" size={30} /></a>
        </nav>
      </header>
      
      <div className='space-y-4'>
        <div className='flex gap-7 flex-col items-center justify-center'>
          <div className='bg-white flex items-center justify-center mx-auto w-3/6 h-48 py-2 px-3 rounded-xl shadow-md shadow-white'>
          <QRCodeCanvas
            className='w-full h-full'
            size="100"
            value={JSON.stringify(qrCode)}
            imageSettings={{
              src: "./logo.png",
              x: undefined,
              y: undefined,
              height: 24,
              width: 24,
              excavate: true,
            }}
          />
          </div>
          <p className='text-[#637394]'>Show this code to the gatekeeper at the cinema</p>
        </div>

        <img className='w-full' src='./ticket.svg' alt="ticket" />

        <div className='px-4 space-y-6'>
          <h2 className='text-white text-lg font-semibold'>{title}</h2>
        
          <ul className='flex flex-col gap-1'>
            <li className='flex'>
              <span className='flex-1 text-[#637394]'>Cinema</span>
              <span className='flex-[3] text-white'>{cinema}</span>
            </li>
            <li className='flex'>
              <span className='flex-1 text-[#637394]'>Date</span>
              <span className='flex-[3] text-white'>{currentDate}</span>
            </li>
            <li className='flex'>
              <span className='flex-1 text-[#637394]'>Hall</span>
              <span className='flex-[3] text-white'>6th</span>
            </li>
            <li className='flex'>
              <span className='flex-1 text-[#637394]'>Seats</span>
              <span className='flex-[3] text-white'>{tickets}</span>
            </li>
            <li className='flex'>
              <span className='flex-1 text-[#637394]'>Coast</span>
              <span className='flex-[3] text-white'>{price}</span>
            </li>
          </ul>

          <div className='flex gap-4 justify-evenly text-white font-semibold'>
            <div className='w-full text-center rounded-xl py-3 border border-[#637394]'>Refun</div>

            <div className='w-full flex items-center justify-center space-x-3 py-3 px-7 rounded-xl bg-gradient-to-b from-[#FF8036] to-[#FC6D19]'>
              <FaShare color='FFF' size={20} />
              <span className='text-lg'>Send</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}