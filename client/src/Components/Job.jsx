import React from 'react'
import './job.scss'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'
const Job = ({job,setJob}) => {
  const navigate = useNavigate();

    function handleClick() {
      setJob(job)
      navigate("/details");
    }
  if(!job) return null
  return (
    <div className="jobCon">
        <div className="flex1"><img src="logo192.png" alt="" /></div>
        <div className="flex2">
          <div className="flexinside">
          <p className='jobCom'>{job.companyName}</p>
          <p className='jobCom'>{ethers.utils.formatEther(job.deposit)} ETH</p>

          </div>
            <p className='jobTitle'>{job.jobTitle}</p>
            <div className='flexinside'>
                <p> {job.jobLocation} </p>
                <p>{job.jobType}</p>
                <p>${parseInt(job.jobSalary)}</p>
            </div>
        </div>
        <div className="flex3"><button onClick={()=>handleClick(job)}>View Details</button></div>
    </div>
  )
}

export default Job