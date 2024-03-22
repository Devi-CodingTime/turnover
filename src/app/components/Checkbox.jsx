import React from 'react'

const Checkbox = ({label}) => {
  return (
    <div className="inline-flex items-center gap-2">
        <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="check">
            <input type="checkbox" className="bg-[#C1C1C1] before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900"
            id="check" />
            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                    stroke="currentColor" strokeWidth="1">
                    <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
            </span>
        </label>
        <label className="mt-px font-light text-[#000000] cursor-pointer select-none" htmlFor="check">
            {label}
        </label>
    </div> 
  )
}

export default Checkbox
