import React from 'react'
import {HiSearch} from 'react-icons/hi'

const Search = ({search, setSearch}) => {
  return (
    <div className='relative w-full md:max-w-fit'>
      <HiSearch size={24} className="absolute top-[50%] left-8 transform translate-y-[-50%] text-lModeInput dark:text-dMTextLModeElements"/>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Search for a country'  className='text-xs md:text-base bg-dMTextLModeElements dark:bg-dModeElements py-4 pl-20 pr-8 w-full lg:w-[28rem] text-lModeText dark:text-dMTextLModeElements placeholder-lModeText dark:placeholder-dMTextLModeElements rounded-lg shadow-md outline-none'/>
    </div>
  )
}

export default Search