import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({country}) => {
  return (
    <Link href={`/${country.name?.common.toLowerCase()}`} className='shadow-md rounded-lg overflow-hidden dark:bg-dModeElements hover:scale-105 transition-transform duration-200 ease-in-out'>
      <div className='h-36 relative overflow-hidden bg-dModeElements/10 dark:bg-dModeBackground/40'>
        {country.flags.svg === 'https://flagcdn.com/mr.svg' ?
          <Image src={country.flags.svg} alt={`${country.name?.common} flag`} fill priority className='object-contain' /> :
          <Image src={country.flags.svg} alt={`${country.name?.common} flag`} fill className='object-contain' />
        }
      </div>
      <div className='p-7 text-left dark:bg-dModeElements'>
        <h2 className='mb-4 font-[800]'>{country.name?.common}</h2>
        <div className=' text-sm'>
          <p>Population: {country.population?.toLocaleString()}</p>
          
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card