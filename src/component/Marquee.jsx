import {motion} from "framer-motion";
function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] ">
<div className="text border-t-2 border-b-2  border-zinc-300 pr-50 flex overflow-hidden whitespace-nowrap">
    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8}} className="text-[10vw] leading-none font-semibold uppercase pt-10 pr-20  ">we are ochi</motion.h1>
    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8} } className="text-[10vw] leading-none font-semibold uppercase  pt-10 pr-20 ">we are ochi</motion.h1>
</div>
    </div>
  )
}

export default Marquee