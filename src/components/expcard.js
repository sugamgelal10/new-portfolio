import React from 'react'

const Expcard = ({icon, title, joined, till, desc}) => {
  return (
    <div className='border-2 border-primary2 text-white md:px-[24px] md:py-[30px] rounded-md p-[8px]'>
        <div className='md:flex md:justify-between'>
            <div className='flex gap-4 items-center'>
                <div className='text-[16px] md:text-[24px]'>{icon}</div>
                <div className=' text-[16px] font-semibold md:text-[24px]'>{title}</div>
            </div>
            <div className='text-zinc-300'>{joined}-{till}</div>
        </div>
        <div className='text-[12px] md:text-[16px] mt-[16px] text-zinc-300'>{desc}</div>
    </div>
  )
}

export default Expcard