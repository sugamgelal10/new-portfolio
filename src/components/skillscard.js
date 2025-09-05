import React from 'react'

const SkillCard = ({icon, text}) => {
  return (
    <div className=' font-sora flex flex-col justify-between border-2 border-primary2 text-white md:px-[24px] md:py-[30px] rounded-md p-[8px]' >
        <div className='flex justify-center items-center text-white text-[64px]'>{icon}</div>
        <div className='text-center text-[16px] font-bold text-white'>{text}</div>
    </div>
  )
}

export default SkillCard