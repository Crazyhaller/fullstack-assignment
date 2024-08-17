import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white text-center flex items-center justify-between">
      <h1 className="text-3xl">Abstract | Help Center</h1>
      <button className="bg-gray-700 px-3 py-1 mt-2 rounded">
        Submit a request
      </button>
    </header>
  )
}

export default Header
