import './editor.css'; 
import React from 'react'

function Editor() {
  return (
    <>
      <div className="h-screen flex text-white justify-center">
        <div className="left-area bg-red-600 ">
          Aside Column
        </div>
        <div className="right-area bg-blue-600">
          Editor Area
        </div>
      </div>
    </>
  )
}

export default Editor