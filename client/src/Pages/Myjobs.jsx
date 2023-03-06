import React from 'react'
import Footer from '../Layout/Footer'
import DeleteIcon from '@mui/icons-material/Delete';
import { contractAddress } from '../constants/address'
import Abi from '../constants/JobPortal.json'
import { useSigner } from 'wagmi'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import './details.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
const Myjobs = ({jobs,again,setAgain}) => {
  const {address,isConnected}=useAccount()
  const [myJobs,setMyjobs]=useState([])
  const { data: signer, isLoading } = useSigner()
  const done=(r)=>{
    alert(`Completed! Trx Hash : ${r}`)
    setAgain(!again)
  }
  const getRefund = async (e) => {
   
    const Contract = new ethers.Contract(contractAddress, Abi.abi, signer);
    const data = await Contract.getRefund(e)
    alert("Transaction is pending please wait for confirmation")
    var res=await data.wait()
    res.transactionHash && (done(res.transactionHash))
  }
  useEffect(()=>{
    if(isConnected){
       const myJobs=jobs.filter((job)=>job.creator===address.toString())
      setMyjobs(myJobs)
    }
  },[jobs,isConnected])

  return (
    <>
      <div className="container page">
        <div className='detailsHead'>
          <p>My Jobs</p>
        </div>

        <div className="topDetails">
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Deposit Amount</th>
              <th>Job Category</th>
              <th>Get Refund</th>
            </tr>
            </thead>
            <tbody>
              {
                myJobs.map((job,i)=>(

            <tr key={i}>
              <td>{job.jobTitle}</td>
              <td>{ethers.utils.formatEther(job.deposit)}</td>
              <td>{job.jobCategory}</td>
              <td> <Tooltip title="Refund" onClick={()=>getRefund(job.deposit)}>
                <IconButton>
                  <DeleteIcon color='black' />
                </IconButton>
              </Tooltip>
                {/* <Tooltip title="Edit">
                  <IconButton>

                    <EditIcon color='black' />
                  </IconButton>
                </Tooltip> */}
              </td>
            </tr>
                ))
              }
            </tbody>
          </table>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Myjobs