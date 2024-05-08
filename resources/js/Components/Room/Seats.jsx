import { router } from '@inertiajs/react';
import { useState, useEffect } from "react";

export const Seats = ({ movieData }) => {
  const { id, title, session, seats } = movieData;
  const { cinema, time } = session;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    setSelectedSeats(prevSeats => {
      if (prevSeats.find(s => s.row === seat.row && s.col === seat.col)) {
        return prevSeats.filter(s => !(s.row === seat.row && s.col === seat.col));
      } else {
        return [...prevSeats, seat];
      }
    });
  };

  const handlePayment = () => {
    const price = 1500 * selectedSeats.length;
    router.post('/payment', {
      id,
      title,
      cinema,
      time,
      seats: selectedSeats.length,
      tickets: selectedSeats.map(seat => `${seat.row}-${seat.col}`).join(', '),
      price
    });
  };

  return (
    <div className="w-full h-screen flex flex-wrap px-1 gap-2 py-2 pb-10 items-center justify-center">
      <ul className="w-full text-white flex gap-3 items-center justify-center">
        <li className="flex gap-2 items-center">
          <div className="w-3 h-3 rounded-full bg-[#637394]"></div>
          <span>Available</span>
        </li>
        <li className="flex gap-2 items-center">
          <div className="w-3 h-3 p-2 rounded-full text-sm flex items-center justify-center bg-[#1F293D] text-[#637394]">x</div>
          <span>Occupied</span>
        </li>
        <li className="flex gap-2 items-center">
          <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#FF8036] to-[#FC6D19]"></div>
          <span>Chosen</span>
        </li>
      </ul>

      {seats.room.map((seat, index) => (
        <button
          key={index}
          className={`w-10 h-10 flex items-center justify-center text-white font-bold rounded-lg cursor-pointer ${seat.reserved ? "bg-[#1f293d] text-[#637394]" : selectedSeats.find(s => s.row === seat.row && s.col === seat.col) ? "bg-gradient-to-b from-[#FF8036] to-[#FC6D19] text-white" : "bg-[#25334e] text-white"}`}
          onClick={() => !seat.reserved && handleSeatSelection(seat)}
        >
          {seat.reserved ? "X" : `${seat.col}`}
        </button>
      ))}

      {selectedSeats.length > 0 && (
        <div className="w-full px-2">
          <button onClick={handlePayment} className="w-full py-3 text-lg font-semibold rounded-lg bg-gradient-to-b from-[#FF8036] to-[#FC6D19] text-white">{`Buy ${selectedSeats.length} tickets for ${1500 * selectedSeats.length}kz`}</button>
        </div>
      )}
    </div>
  );
};
