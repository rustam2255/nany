import Navbar from "../../shared/navbar"

const Hero = () => {
  return (
    <div
      className="w-screen h-screen  bg-cover "
      style={{ backgroundImage: "url('/bg-image/home.jpg')" }}
    >
      <Navbar />
      <div className="flex flex-col gap-6 w-[800px] h-[366px] mt-[124px] ml-19 backdrop-blur-[10px] bg-white/5  ">
        <div className="">
          <h2 className=" font-poppins font-bold text-[50px] leading-[50px] tracking-[0px] align-middle text-white
    borde border-[#00000080] px-4 py-2"
            style={{ textShadow: "0px 4px 4px #00000040" }}>Mehr ishonch va g'amxo'rlik - bir joyda</h2>
        </div>
        <div>
          <p className="font-poppins font-medium text-[30px] leading-8 tracking-[0px] align-middle text-white  px-5 py-4"
            style={{
              WebkitTextStroke: "1px #00000080",
              WebkitTextFillColor: "#F5F5F5",
              textShadow: "0_1px_3px_0_#00000040"
            }}>
            Sizga eng mos enaga yoki yordamchini topishda yo‘l ko‘rsatamiz.
          </p>

        </div>
        <div className="flex gap-15 mt-12 px-5">
          <button className=" w-[109px] flex h-9 opacity-100 items-center justify-center  gap-2 border cursor-pointer border-[#FBA8BD] rounded-[30px] bg-[#FBA8BD]">
            <p className="    font-inter font-medium text-[20px] leading-5 align-middle text-white">Ish topish</p>
          </button>
          <button className=" w-[186px] flex h-9 opacity-100 items-center justify-center  gap-2 border cursor-pointer border-[#FBA8BD] rounded-[30px] bg-[#FBA8BD]">
            <p className="    font-inter font-medium text-[20px] leading-5 align-middle text-white">Nany topish</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero