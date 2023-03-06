import React from 'react'
import './banner.scss'
const Banner = ({setSearch,search}) => {
  return (
    <div className='container'>
      <div className="bannerCon">
        <img src="imageBanner.png" alt="" />
        <div className="bannerText">
          <p className='bannerMainText'>Find A Job That
            Matches Your Passion</p>
          <p className="bannerLightText">
           This is a Decentralize job portal. All the data's saved on ethereum blockchain. Everyone can post their job circular with any deposit amount. Based on the deposit amount all job's will get ranked. Anytime they can get full refund of deposit amount by deleting the job circular. 
          </p>
          <div className="bannerSearch">
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner