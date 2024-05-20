import { motion, useAnimation } from "framer-motion"

import {Power4} from "gsap/all";

function feature() {
    const cards=[useAnimation(),useAnimation()];
const handlehover=(idx)=>{
cards[idx].start({y:"0"})
}
const handlehoverend=(idx)=>{
    cards[idx].start({y:"100% "})
    }
  return (
    <div className="w-full py-20">
        <div className="w-full px-20  border-b-[1px] border-zinc-800 pb-20">
            <h1 className="text-8xl tracking-tight">Featured projects</h1>
            </div>
        <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10"> 
                <motion.div onHoverStart={()=>handlehover(0)} onHoverEnd={()=>handlehoverend(0)} className="cardcontainer relative w-1/2 h-[80vh] ">
                    <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full top-1/2 -translate-y-1/2 -translate-x-1/2 text-8xl leading-none tracking-tighter z-[9]">   
                        {"FYDE".split('').map((item,idx)=>(
                        <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:"linear",delay:idx*.06}} className="inline-block" >{item}</motion.span>))}</h1>
                    <div className=" card w-full h-full rounded-xl overflow-hidden ">
                        <img  className="w-full h-full bg-cover bg-center" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </motion.div>
                <motion.div onHoverStart={()=>handlehover(1)} onHoverEnd={()=>handlehoverend(1)} className="cardcontainer relative w-1/2 h-[80vh]  ">
                    <div className= " card  w-full h-full rounded-xl overflow-hidden ">
                    <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full top-1/2 -translate-y-1/2 translate-x-1/2 text-8xl leading-none tracking-tighter z-[9]">
                    {"VISE".split('').map((item,idx)=>                      
                      <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:"linear",delay:idx*.06}} className="inline-block" >{item}</motion.span>)}
                    </h1>
                    
                    <img  className="w-full h-full bg-cover bg-center" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                    </motion.div>
        </div>
        </div>
    </div>
  )
}

export default feature