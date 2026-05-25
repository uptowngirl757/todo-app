import React, { useEffect, useState } from 'react'
import { assets } from './assets/assets'
const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={`w-full h-100 bg-cover bg-center hero-bg `}>
      <section className="h-[80%] mx-auto max-w-160 w-[90%] flex flex-col justify-center items-center">
        <header className="flex items-center justify-between w-full mb-10">
          <h1 className="text-white text-3xl font-bold tracking-[20px]">
            TODO
          </h1>
          <img
            src={theme === 'light' ? assets.iconMoon : assets.iconSun}
            alt="Light & Dark Mode Toggler"
            className="cursor-pointer"
            onClick={() => {
              setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
            }}
          />
        </header>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="w-full bg-white rounded-md text-navy-850 p-4 focus:outline-none"
        />
      </section>
    </div>
  )
}

export default App
