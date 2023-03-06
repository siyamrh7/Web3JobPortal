import React from 'react'
import './popularCtg.scss'
const PopularCtg = ({name,setSearch}) => {
  return (
    <div className="technology" onClick={()=>setSearch(name)}>
        <img src="logo192.png" alt="" />
        <p>{name}</p>
    </div>
  )
}

export default PopularCtg