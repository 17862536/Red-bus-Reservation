import React from 'react'

const Input = ({ img, type, name, placeholder, onChangeFunc=()=>{} }) => {
  return (

       <div className="flex flex-nowrap mx-2">
   { img? <div className="mx-2 my-auto">
        <img src={img} alt={name} />
      </div> :null}
      <div className="mx-2 my-auto">
        <p className="my-1 text-lg text-gray-400 font-semibold">{name}</p>
        <input
          type={type}
          value={placeholder}
          className="py-5 text-xl font-semibold outline-none max-w-[150px]"
          onChange={(e) => onChangeFunc(e.target.value)}
        />
      </div>
    </div>
    
  )
}

export default Input
