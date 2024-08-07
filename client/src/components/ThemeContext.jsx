import React ,{ createContext, useState} from 'react'
const ThemeContext=createContext()
const ThemeProvider = ({children}) => {
    const [theme,setTheme]=useState('light')
    console.log(theme)
    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==='light'?'dark':'light'))
    }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider,ThemeContext}
