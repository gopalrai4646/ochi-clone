import { FaArrowUp } from "react-icons/fa6";
import { motion } from 'framer-motion'
function landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1 '>
      <div className="textstr  mt-40 px-20">
        {["we create","EYE-OPENING","PRESENTATIONS"].map((item,idx)=>{
          return   <div className="masker ">
            <div className="w-fit flex ">
{idx===1&&(<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:"linear",duration:0.6  }} className="w-[9vw] relative top-[5px] -mr-[70px] bg-red-300"></motion.div>)}
          <h1 key={idx} className=" font-medium font-[Founders_Grotesk] px-20 leading-[6vw] uppercase text-[7.5vw] tracking-tighter">{item}</h1>
            </div>
        </div>
        })}</div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-10">
      {["For public and private companies","From first pitch to Ipo"].map((item,idx)=><p className="text-md tracking-tight font-light leading-none">{item}</p>)}
      <div className="start flex gap-5 items-center">
        <div className="px-5 py-2 border-[1px] border-zinc-700 font-light  text-sm capitalize rounded-full">start the project</div>
        <div className="w-10 h-10  border-[1px] flex justify-center items-center border-zinc-700 rounded-full">
      <span className="rotate-[45deg]">    <FaArrowUp/></span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default landingpage