"use client";
import React, { useEffect, useState } from 'react'
import Topheader from '../components/Topheader'
import Heading from '../components/Heading'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'
import { fakeUser } from '../../../utils/generatefakedata';

const MainContent = () => {
  const [catdata,setCatdata] = useState([]);
  const [page,setPage] = useState(1);

  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    console.log("inside fn ",event.target.value);
    const { value, checked } = event.target;
    if (checked) {
      setCheckedValues((prevValues) => [...prevValues, value]); // Add the value to the array
    } else {
      setCheckedValues((prevValues) => prevValues.filter((item) => item !== value)); // Remove the value from the array
    }
  };

  const handleNext = ()=>{
    const loadData = fakeUser(6*(page+1));
    let aarr= loadData.slice(Math.max(loadData.length - 6, 1))
    setCatdata(aarr);
    setPage(prev=>prev+1);
  }

  const handlPrev = ()=>{
    if(page>1)
    {  
      const loadData = fakeUser(6*(page-1));
      let aarr= loadData.slice(Math.max(loadData.length - 6, 1))
      setCatdata(aarr);
      setPage(prev=>prev-1);
    }
  }
  const handleClick= (num)=>{
    const loadData = fakeUser(6*num);
    let aarr= loadData.slice(Math.max(loadData.length - 6, 1))
    setCatdata(aarr);
    setPage(num);
  }
  useEffect(()=>{
    const loadData = fakeUser(6);
    setCatdata(loadData);
  },[]);
  return (
    <>
      <Topheader/>
        <div className='w-[576px] h-[658px] border border-[#C1C1C1] border-solid rounded-[20px] mx-auto my-8 flex flex-col gap-4 p-5'>
            <Heading heading="Please mark your interests!" className="font-semibold text-[32px] leading-[38.73px] text-[#000000] mx-auto mt-5"/>
            <Heading heading="We will keep you notified." className="font-normal text-[16px] leading-[26px] text-[#000000] mx-auto mt-5"/>
            <Heading heading="My saved interests!" className="font-medium text-[20px] leading-[26px] text-[#000000] mt-5 text-left"/>
        
            {catdata?.map((item,i)=>{
              return (
                <React.Fragment key={i}>
              <Checkbox label={item.categoryname} value={item.categoryname} onChange={handleCheckboxChange}/>
              
              </React.Fragment>)
            })}
             {checkedValues.length>0?<div>Checked Values: {(checkedValues).join(", ")}</div>:null}
            <nav className="flex justify-center items-center gap-x-1">
                <button onClick={handlPrev}
                    type="button"
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 
                    disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <svg className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}  strokeLinecap="round" strokeLinejoin="round"
                    >
                    <path d="m15 18-6-6 6-6"/>
                    </svg>
                </button>
                <div className="flex items-center gap-x-1">
                    <Button type="button" btnText="1" onClick={()=>handleClick(1)} className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900  py-2 px-3 text-sm rounded-lg focus:outline-none "/>

                    <Button type="button" btnText="2" onClick={()=>handleClick(2)}className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900  py-2 px-3 text-sm rounded-lg focus:outline-none "/>

                    <Button type="button" btnText="3" onClick={()=>handleClick(3)}className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900  py-2 px-3 text-sm rounded-lg focus:outline-none "/>
                    <Button type="button" btnText="4" onClick={()=>handleClick(4)}className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900  py-2 px-3 text-sm rounded-lg focus:outline-none "/>
                    <Button type="button" btnText="5" onClick={()=>handleClick(5)}className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900  py-2 px-3 text-sm rounded-lg focus:outline-none "/>
                    <Button type="button" btnText="6" onClick={()=>handleClick(6)}className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900  py-2 px-3 text-sm rounded-lg focus:outline-none "/>
                    
                   
                </div>
                <button type="button" onClick={handleNext}
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 
                    disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    
                    <svg className="flex-shrink-0 size-3.5"  xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
            </nav>

        </div>
    </>
  )
}

export default MainContent
