import React, { useEffect } from 'react'
import './navbar.scss'
import { useNavigate } from 'react-router-dom'
import { useWeb3Modal} from '@web3modal/react'
import { useAccount } from 'wagmi'
import { useSigner ,useContract,useProvider } from 'wagmi'
import { ethers } from 'ethers'

import { contractAddress } from '../constants/address'
import Abi from '../constants/JobPortal.json'
const Navbar = ({setJobs,again}) => {
  const navigate = useNavigate();
  const { isConnected ,address} = useAccount()
  const {open}=useWeb3Modal()
 const { data: signer } = useSigner()
 const provider=useProvider()
  function handleClick() {
    navigate("/create");
  }
  function handleClick2() {
    navigate("/");
  }
  function handleClick3() {
    navigate("/myjobs");
  }
  const contract = useContract({
    address: contractAddress,
    abi: Abi.abi,
    signerOrProvider: provider,
  })

  const fetchBalance = async () => {
    const data = await contract.getBalance()
    console.log(ethers.utils.formatEther(data))
  }
  const fetchJobs = async () => {
    const data = await contract.getAllJobs()
   setJobs(data)
  }

useEffect(()=>{
  fetchBalance()
  fetchJobs()
},[again])

  return (
    <div className='container'>
      <div className="navbarCon">
        <p className='navLogo' onClick={handleClick2}>Career Portal</p>
        <div className='navButton'>

          {isConnected ? (
            <>
            
              <button className='btnConnect' onClick={handleClick3}>
                My Jobs
              </button>
              <button className='postJobBtn' onClick={handleClick}>
                Post A Job
              </button>
              <button className='postJobBtn mobile-none' onClick={open}>Disconnect</button>
            </>
          ): (  <button className='postJobBtn' onClick={open}>
         CONNECT
        </button>)}
           {/* <Web3Button onClick={open}>
          </Web3Button> */}
        </div>
      </div>
    </div>

  )
}

export default Navbar