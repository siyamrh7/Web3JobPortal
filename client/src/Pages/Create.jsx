import React, { useState } from 'react'
import Footer from '../Layout/Footer'
import './create.scss'
import { Button, Paper, TextareaAutosize, TextField } from '@mui/material'
import { contractAddress } from '../constants/address'
import Abi from '../constants/JobPortal.json'
import { useSigner } from 'wagmi'
import { ethers } from 'ethers'
import { useNavigate } from 'react-router-dom'
const Create = ({again,setAgain}) => {
  const navigate=useNavigate()
  const [state, setState] = useState({ salary: "", company: "", web: "", title: "", category: "", jobtype: "", location: "", exp: "", qua: "", applic: "", })
  const [deposit, setDeposit] = useState("")
  const { data: signer, isLoading } = useSigner()
  const done=(r)=>{
    alert(`Completed! Trx Hash : ${r}`)
    setAgain(!again)
    navigate("/myjobs")
  }
  const dataSetter = async () => {
    try {
      
      const Contract = new ethers.Contract(contractAddress, Abi.abi, signer);
      const data = await Contract.setter(state.salary, state.company, state.web, state.title, state.category, state.jobtype, state.location, state.exp, state.qua, state.applic, { value: ethers.utils.parseEther(deposit).toString() })
      alert("Transaction is pending please wait for confirmation")
      var res=await data.wait()
      res.transactionHash && (done(res.transactionHash))
    } catch (e) {

      alert(`Deposit amount should be different for all Job's`)
       

    }
  }
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="container">
        <div className='detailsHead'>
          <p>Create a Job</p>
        </div>
        <Paper className='form' >
          <TextField label="Job Title"
            placeholder="Senior Blockchain Developer" className="input" fullWidth onChange={onChange} name="title" />
          <TextField label="Company Name"
            placeholder="Jonoks" className="inputs" onChange={onChange} name="company" />
          <TextField label="Company Website"
            placeholder="https://web3careerportal.com" className="inputs" onChange={onChange} name="web" />
          <TextField label="Job Category"
            placeholder="Placeholder" className="inputs" onChange={onChange} name="category" />
          <TextField label="Job Type"
            placeholder=" Fulltime/Partime" className="inputs" onChange={onChange} name="jobtype" />
          <TextField label="Job Location"
            placeholder="Placeholder" className="inputs" onChange={onChange} name="location" />
          <TextField label="Estimated Salary $" type="number"
            placeholder="12000" className="inputs" onChange={onChange} name="salary" />
          <TextField label="Experience in Years"
            placeholder="5" className="inputs" onChange={onChange} name="exp" />
          <TextField label="Qualification"
            placeholder="Bsc in CSE" className="inputs" onChange={onChange} name="qua" />
          <TextField label="Job Application Link"
            placeholder="https://web3careerportal.com" className="inputs" onChange={onChange} name="applic" />
          <TextField type="number" label="Deposited Amount (ETH)"
            placeholder="0.001" className="inputs" onChange={(e) => setDeposit(e.target.value)} />
        </Paper>
        <Button onClick={dataSetter} style={{
          borderRadius: 10,
          backgroundColor: "#111",
          padding: "10px 20px",
          fontSize: "18px"
        }}
          variant="contained" fullWidth>
          Submit
        </Button>
      </div>
      <Footer />
    </>
  )
}

export default Create