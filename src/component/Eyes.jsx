import { useEffect, useState } from 'react'

function Eyes() {
    const [rotate,setrotate]=useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mousex=e.x;
            let mousey=e.y;
            let deltax=mousex-window.innerWidth/2;
            let deltay=mousey-window.innerHeight/2;

            var angle=Math.atan2(deltay,deltax) * (180/Math.PI);
            setrotate(angle -180);
        })
    })
  return (
    <div  className='eyes w-full h-screen overflow-hidden'>
        <div  data-scroll data-scroll-speed="-.7"  className='h-full w-full relative bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)] bg-cover bg-center'>
            <div className='absolute flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 gap-10'>
            <div className=' flex justify-center items-center w-[15vw] h-[15vw] rounded-full  bg-zinc-100'>
            <div className='w-2/3 h-2/3  relative rounded-full  bg-zinc-900'>
          <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  '>      
                <div className='w-10 h-10 rounded-full  bg-zinc-100'></div>
             </div>
            </div>
            </div>
            <div className='w-[15vw] h-[15vw] rounded-full flex justify-center items-center  bg-zinc-100'>
            <div className='w-2/3 h-2/3  relative rounded-full  bg-zinc-900'>
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  '>      
                <div className='w-10 h-10 rounded-full  bg-zinc-100'></div>
             </div>
            </div>
            </div>
            </div>
          
        </div>

    </div>
  )
}

export default Eyes