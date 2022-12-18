import React from 'react'
import Link from 'next/link'

const ButtonLink = ({children, link, styles}) => {
  return (
    <Link href={link} className={`${styles} flex items-center gap-2 py-1 max-w-fit bg-dMTextLModeElements dark:bg-dModeElements hover:bg-dModeElements/10 dark:hover:bg-dModeBackground/50 shadow-md rounded-sm`}>
      {children}
    </Link>
  )
}

export default ButtonLink