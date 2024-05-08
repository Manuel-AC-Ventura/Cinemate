import { CgSpinnerTwoAlt } from "react-icons/cg";

export const Loading = () => {
  return (
    <div className="w-full mt-52 flex items-center justify-center">
      <CgSpinnerTwoAlt className="animate-spin" size={40} color="637394" />
    </div>
  )
}
