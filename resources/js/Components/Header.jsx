import { MdLocationPin } from "react-icons/md";

export const Header = () => {
  return (
    <header className="w-full h-50 bg-[#1D273A]">
      <nav className="w-full h-full p-4 flex items-center justify-between">
        <a href="/">
          <img className="h-12" src="./logo.png" alt="Cinemate" />
        </a>

        <ul className="flex gap-3 items-center text-white">
          <li className="flex gap-1 items-center">
            <MdLocationPin size={24} color="637394" />
            <span className="font-semibold">Lang</span>
          </li>
          <li>
            <button className="bg-gradient-to-t from-[#FF8036] to-[#FC6D19] py-2 px-4 rounded-md">Log In</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
