import Image from 'next/image'
import Link from 'next/link'
import React from 'react' 

const Topheader = () => {
  return (<>
    <div className=' h-[100px] bg-[#FFFFFF]'>
      <div className='h-9 ml-[83%] bg-[#FFFFFF] flex items-center'>
        <div className='flex h-[13px] w-[224px] justify-around'>
          <div className='text-[12px] w-[27px] h-[15px] leading-[14.52px] text-[#333333] font-normal'>Help</div>
          <div className='text-[12px] w-[97px] h-[15px] leading-[14.52px] text-[#333333] font-normal'>Orders & Returns</div> 
          <div className='text-[12px] w-[47px] h-[15px] leading-[14.52px] text-[#333333] font-normal'>Hii,John</div>
        </div>
      </div>
     
      <div className='flex justify-between items-center px-5'>
        <Link href={'/'} className='w-[212px] h-[39px]'>
        <h1 className='text-[32px] leading-[38.73px] font-bold text-[#000000]'>ECOMMERCE</h1>
        </Link>
        <div className='flex gap-10 items-center justify-center'>
            <div className='font-semibold text-[16px] leading-[19.36px] w-[86px] h-[19px] text-[#000000]'>Categories</div>
            <div className='font-semibold text-[16px] leading-[19.36px] w-[69px] h-[19px] text-[#000000]'>Sale</div>
            <div className='font-semibold text-[16px] leading-[19.36px] w-[79px] h-[19px] text-[#000000]'>Clearance</div>
            <div className='font-semibold text-[16px] leading-[19.36px] w-[82px] h-[19px] text-[#000000]'>New stock</div>
            <div className='font-semibold text-[16px] leading-[19.36px] w-[69px] h-[19px] text-[#000000]'>Trending</div>
        </div>
        <div className='flex gap-6'>
            <div className='w-8 h-8'>
                <Image src="/search.png" alt="search" width={19.53} height={19.54}/>
            </div>
            <div className='w-8 h-8'>
                <Image src='/cart.png' alt='cart' width={21.75} height={19.5}/>
            </div>
        </div>
      </div>
    </div>
    <div className='h-9 bg-gray-100 flex'>
      <div className='h-[18px] w-[290px] flex gap-4 justify-center items-center m-auto'>
        <div className='h-4 w-4 pt-[2px]'>
          <Image src="/leftArrow.png" alt="leftArrow" height={11} width={6} style={{width:"auto",height:"auto"}}/>
        </div>
        <p className='text-sm w-[214px] h-[17px] text-[14px] leading-[16.94px] font-medium text-[#000000]'>Get 10% off on business sign up</p>
        <div className='h-4 w-4 pt-[2px]'>
          <Image src="/rightArrow.png" alt="rightArrow" height={11} width={6} style={{width:"auto",height:"auto"}}/>
        </div>
      </div>
     
    </div>
  </>)
}

export default Topheader
