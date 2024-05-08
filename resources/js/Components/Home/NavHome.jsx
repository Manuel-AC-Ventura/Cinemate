import { FaMagnifyingGlass } from "react-icons/fa6";

export const NavHome = () => {
  return (
    <div className="flex px-4 items-center justify-between">
      <h1 className="text-white text-2xl font-semibold">Now in cinemas</h1>
      <FaMagnifyingGlass size={25} color="#637394" />
    </div>
  )
}
