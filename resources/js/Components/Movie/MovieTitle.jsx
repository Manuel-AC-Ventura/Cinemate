import { IoIosArrowBack } from "react-icons/io";

export const MovieTitle = ({ title, activeTab, setActiveTab }) => {
  return (
    <header className="w-full flex pt-5 gap-7 flex-col items-center bg-[#1d2638]">
      <nav className="w-full flex py-3 px-10">
        <a href="/" className="flex-[1]">
          <IoIosArrowBack size={30} color="637394" />
        </a>
        <h1 className="flex-[11] text-center text-white text-2xl font-semibold">{title}</h1>
      </nav>
      <nav className="w-full flex items-center justify-around">
        <p
          onClick={() => setActiveTab('About')}
          className={`w-full h-full pb-5 text-center text-xl font-semibold border-b ${activeTab === 'About' ? 'text-[#FF8036] border-[#FF8036]' : 'text-[#637394] border-[#637394]'}`}
        >
          About
        </p>
        <p
          onClick={() => setActiveTab('Sessions')}
          className={`w-full h-full pb-5 text-center text-xl font-semibold border-b ${activeTab === 'Sessions' ? 'text-[#FF8036] border-[#FF8036]' : 'text-[#637394] border-[#637394]'}`}
        >
          Sessions
        </p>
      </nav>
    </header>
  )
}
