import {useState, useEffect} from 'react'
import { useTheme } from "next-themes"
import {HiMoon, HiOutlineMoon} from 'react-icons/hi'


const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <header className='bg-dMTextLModeElements dark:bg-dModeElements w-full shadow-sm md:shadow-md'>
      <div className='max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-7 flex items-center justify-between'>
        <h1 className='lg:text-2xl font-bold'>Where in the world?</h1>

        {currentTheme === 'dark' ? (
          <button className='flex items-center gap-2 text-xs lg:text-lg' onClick={() => setTheme('light')}>
            <HiMoon size={18}/>
            Light Mode
          </button>
         ) : (
          <button className='flex items-center gap-2 text-xs lg:text-lg' onClick={() => setTheme('dark')}>
            <HiOutlineMoon size={18}/>
            Dark Mode
          </button>
         )
        }
      </div>
    </header>
  )
}

export default Header