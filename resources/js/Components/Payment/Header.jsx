import { IoIosArrowBack } from "react-icons/io";

export const Header = ({ id }) => {
  return (
    <header className="w-full flex pt-5 pb-3 gap-1 flex-col items-center bg-[#1e283c]">
      <nav className="w-full flex py-3 px-10">
        <a href={`/seats`} className="flex-[1]">
          <IoIosArrowBack size={30} color="637394" />
        </a>
        <div className="flex-[11] flex flex-col gap-3">
          <h1 className="text-center text-white text-xl font-semibold">Pay for tickets</h1>
        </div>
      </nav>
    </header>
  )
}
