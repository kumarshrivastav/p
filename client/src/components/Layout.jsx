import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Layout = ({children}) => {
  const {theme}=useContext(ThemeContext)
  return (
    <div className={`${theme === 'dark' ?'bg-gray-900':'bg-gray-300'} min-h-screen p-2`}>
      {children}
    </div>
  )
}

export default Layout
