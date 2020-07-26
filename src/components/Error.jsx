import React from 'react'

const Error = ({children}) => {
  return (
    <div className="bg-red-700 uppercase text-white font-bold text-center p-3 mb-3 rounded-md">
        {children}
    </div>
  )
}

export default Error