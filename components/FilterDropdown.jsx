const FilterDropdown = ({dropdownToggle,setDropdownToggle, region, setRegion}) => {
  const regions = [
    {
      name:'Africa'
    },
    {
      name:'Americas'
    },
    {
      name:'Asia'
    },
    {
      name:'Europe'
    },
    {
      name:'Oceania'
    },
    {
      name:'Antarctic'
    },
    ,
  ]

  const clickHandler = (region) => {
    setRegion(region)
    setDropdownToggle(false)
  }

  return (
    <div className='relative max-w-fit mt-8 md:mt-0'>
      <button onClick={() => setDropdownToggle(!dropdownToggle)} className=" text-lModeText dark:text-dMTextLModeElements font-medium rounded-lg w-48 text-xs md:text-base px-5 py-4 text-center inline-flex justify-between items-center bg-dMTextLModeElements dark:bg-dModeElements shadow-md" type="button">
        {region ? region : 'Filter by Region'}
        <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      
      {/* Dropdown menu */}
      <div className={`${dropdownToggle? '' : 'hidden'} mt-1 absolute z-10 w-full bg-dMTextLModeElements dark:bg-dModeElements rounded divide-y divide-gray-100 shadow`}>
        <ul className=" text-sm text-lModeText dark:text-dMTextLModeElements">
          {
            regions.map(region => (
              <li key={region.name}>
                <p className="w-full block py-2 px-4 dark:hover:bg-dMTextLModeElements/10 cursor-pointer" onClick={() => clickHandler(`${region.name}`)}>{region.name}</p>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default FilterDropdown