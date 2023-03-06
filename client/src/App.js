import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Details from './Pages/Details';
import Myjobs from './Pages/Myjobs';

import Navbar from './Layout/Navbar';
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { chain, configureChains, createClient, WagmiConfig, useProvider } from 'wagmi'
import { useState } from 'react';


function App() {

  if (!process.env.REACT_APP_WALLET_CONNECT) {
    throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')
  }

  const projectId = process.env.REACT_APP_WALLET_CONNECT

  // 2. Configure wagmi client
  const chains = [chain.goerli]
  const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: 'JobPortal', chains }),
    provider
  })

  // 3. Configure modal ethereum client
  const ethereumClient = new EthereumClient(wagmiClient, chains)

var [jobs,setJobs]=useState([])
var [job,setJob]=useState({})
var [again,setAgain]=useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <WagmiConfig client={wagmiClient}>
          <Navbar setJobs={setJobs} again={again}/>
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
          <Routes>
            <Route path='/' element={<Home jobs={jobs} setJob={setJob}/>} />
            <Route path='/create' element={<Create again={again} setAgain={setAgain}/>} />
            <Route path='/details' element={<Details job={job} />} />
            <Route path='/myjobs' element={<Myjobs jobs={jobs} again={again} setAgain={setAgain}/>} />
          </Routes>
          
        </WagmiConfig>
 
      </BrowserRouter>
    </div>
  );
}

export default App;
