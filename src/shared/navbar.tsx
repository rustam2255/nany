import { Search } from "lucide-react"

const Navbar = () => {
  return (

    <div className="bg-transparent py-6  px-19 w-full ">
      <div className="flex  justify-between items-center  text-center">
        <div className="flex items-center justify-center">
          <h1 className="text-[40px] font-bold text-white leading-10 tracking-[0px]" style={{ textShadow: "0px 4px 4px #00000040" }}>
            Carely.uz
          </h1>

        </div>
        <div className="flex gap-10 font-medium text-[24px] text-white">
          <p>Biz haqimizda</p>
          <p>
            Xizmatlar</p>
        </div>
        <div className="flex gap-5 items-center text-white">
          <Search className="text-[#FBA8BD]" />
          <div className=" w-[109px] flex h-9 opacity-100 items-center justify-center  gap-2 border border-[#FBA8BD] rounded-[30px] bg-white">
            <p className="    font-inter font-medium text-[20px] leading-5 align-middle text-[#FBA8BD]">Contact</p>
          </div>

          <div className=" w-[109px] flex h-9 opacity-100 items-center justify-center  gap-2 border border-[#FBA8BD] rounded-[30px] bg-[#FBA8BD]">
            <p className="    font-inter font-medium text-[20px] leading-5 align-middle text-white">Login</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar