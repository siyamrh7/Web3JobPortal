import React, { useEffect, useState } from 'react'
import Job from '../Components/Job'
import Banner from '../Layout/Banner'
import Footer from '../Layout/Footer'
import PopularCtg from '../Layout/PopularCtg'
import './home.scss'
import { ethers } from 'ethers'
const Home = ({ jobs, setJob }) => {
  const [Jobs, setJobs] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    if (jobs) {
      var arr1 = [...jobs]
      arr1.sort((a, b) => ethers.utils.formatEther(b.deposit) - ethers.utils.formatEther(a.deposit))

      setJobs(arr1)
    }
  }, [jobs, search])
  useEffect(() => {
    if (search) {
      var data = jobs.filter(d => d.jobTitle.toLowerCase().includes(search.toLowerCase()) || d.jobCategory.toLowerCase().includes(search.toLowerCase()))
      setJobs(data)
    }
  }, [search])
  return (
    <>
      {/* <Navbar/> */}
      <Banner setSearch={setSearch} search={search} />
      { search ? (Jobs.length == 0 && (<div className="container popularCategories"><p className='ppc'>No Jobs found by search...</p></div>)) : (<div className="container popularCategories">
        <p className='ppc'>Popular Categories</p>
        <div className='categories'>
          <PopularCtg name="Digital Marketting" setSearch={setSearch} />
          <PopularCtg name="Graphic Designer" setSearch={setSearch} />
          <PopularCtg name="Software Engineer" setSearch={setSearch} />
          <PopularCtg name="Data Analyst" setSearch={setSearch} />
          <PopularCtg name="Influencer" setSearch={setSearch} />
          <PopularCtg name="Website Developer" setSearch={setSearch} />
          <PopularCtg name="Video Editor" setSearch={setSearch} />
          <PopularCtg name="Blockchain Developer" setSearch={setSearch} />
          <PopularCtg name="Application Developer" setSearch={setSearch} />
          <PopularCtg name="Hardware Expert" setSearch={setSearch} />
        </div>
      </div>)

      }

      {
        Jobs.length !== 0 && (

          <div className="container">
            <p className="ppc">All Listed Jobs</p>
            {Jobs.map((job, i) => (

              <Job job={job} key={i} setJob={setJob} />

            ))}


          </div>
        )
      }
      <Footer />
    </>
  )
}

export default Home