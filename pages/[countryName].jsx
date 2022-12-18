import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ButtonLink from '../components/ButtonLink'

const CountryDetails = ({country, countries}) => {
  const router = useRouter()
  const countryName = router.query.countryName

  console.log(countryName)

  return (
    <div className='text-base px-3 lg:px-0 lg:pt-10 font-NunitoSans font-light'>
      <ButtonLink link={`/`} styles={`px-7`}>
        <HiOutlineArrowNarrowLeft size={18}/>
        Back
      </ButtonLink>

      {country?.map(countryData => (
          
          <div key={countryData.name.common} className="mt-16 lg:mt-20 lg:flex lg:items-center lg:flex-row lg:gap-36">
            <div className='relative w-full h-56 lg:h-96 flex-1'>
              <Image src={countryData.flags.svg} alt="" fill className="object-contain drop-shadow-xl" />
            </div>

            <div className='flex-1 mt-12 lg:mt-0'>
              <div>            
                <h2 className='text-xl lg:text-3xl font-bold mb-5'>{countryData.name?.common}</h2>
                
                <div className='flex items-start flex-col md:flex-row md:justify-between gap-4'>
                  <div className='flex flex-col items-start justify-start gap-2 font-semibold lg:font-bold'>
                    <p>Native Name: <span className='font-light'>{countryData.name.nativeName ? Object.values(countryData.name.nativeName).map((item, index) => {
                      if (index > 0) {
                        return `, ${item.common}`
                      }
                      return item.common
                    }) : 'N/A'
                      } 
                      </span>
                    </p>
                    <p>Population: <span className='font-light'>{countryData.population?.toLocaleString()}</span></p>
                    <p>Region: <span className='font-light'>{countryData.region}</span></p>
                    <p>Sub Region: <span className='font-light'>{countryData.subregion ? countryData.subregion : 'N/A'}</span></p>
                    <p>Capital: <span className='font-light'>{countryData.capital ? countryData.capital : 'N/A'}</span></p> 
                  </div>
                  
                  <div className='flex flex-col gap-2 font-semibold mt-12 md:mt-0'>
                    <p>Top Level Domain: <span className='font-light'>
                    {countryData.tld ? Object.values(countryData.tld).map((item, index) => {
                      if (index > 0) {
                        return `, ${item}`
                      }
                      return item
                    }) : 'N/A'
                    }
                      
                      
                    </span></p>
                    <p>Currencies: <span className='font-light'>{countryData.currencies ? Object.values(countryData.currencies)[0].name : 'N/A'}</span></p>
                     

                    <p>Languages: <span className='font-light'>{countryData.languages ? Object.values(countryData.languages).map((item, index) => {
                      if (index > 0) {
                        return `, ${item}`
                      }
                      return item
                    }) : 'N/A'
                    }
                      </span></p> 
                  </div>
                </div>

              </div>

              <div className='mt-12 flex items-center flex-wrap gap-3'>
                <h3 className='w-full lg:w-auto font-semibold lg:font-bold'>Border Countries: </h3>

                    {/* if countryData has borders */}
                    {countryData.borders ? 
                      <ul className='w-full flex flex-wrap gap-3 mt-4 lg:mt-0'>

                        
                        {countryData.borders.map(borderCode => (
                          countries?.map(country => {

                            /* if mapped border code is equal to mapped country cioc/cca3 */
                            if (borderCode === country.cioc || borderCode === country.cca3) {
                              return (
                                <ButtonLink key={borderCode} link={`/${country.name?.common.toLowerCase()}`} styles={`px-5`}>
                                  {country.name?.common}
                                </ButtonLink>
                              )
                            }

                          })
                        ))
                        }

                      </ul> : <p className='font-light'>No border countries</p>
                     }

              </div>
            </div>
          </div>
      ))
      }
    </div>
  )
}

export default CountryDetails

export const getServerSideProps = async(context) => {
  const countryName = context.params?.countryName

  const res = await fetch(`https://restcountries.com/v3.1/all`)
  const data = await res.json()
 
  const countryRes = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  const countryData = await countryRes.json()

  return {
    props: {
      country: countryData || [],
      countries: data || []
    }
  }

}