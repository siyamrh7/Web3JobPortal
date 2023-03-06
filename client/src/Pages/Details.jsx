import React from 'react'
import Footer from '../Layout/Footer'
import './details.scss'
import { ethers } from 'ethers'
const Details = ({ job }) => {
  
  return (
    <>
      <div className="container" style={{ minHeight: "80vh" }}>
        <div className='detailsHead'>
          <p>{job.jobTitle}</p>
          <p>-</p>
          <p>{job.companyName}</p>
        </div>
        <div className="detailsButton">
        <a href={job.companyWeb} target="_blank" rel="noopener noreferrer"> <button className='first-child'>View Company</button></a>
         <a href={job.applicaionLink} target="_blank" rel="noopener noreferrer"><button className='second-child'>Apply This Job</button></a> 
        </div>
        <div className="topDetails">
          <table>
            <tbody>
              <tr>
                <th>Creator Address</th>
                <td>{job.creator}</td>
              </tr>
              <tr>
                <th>Deposited ETH</th>
                <td>{ethers.utils.formatEther(job.deposit)} ETH</td>
              </tr>
              <tr>
                <th>Job Title</th>
                <td>{job.jobTitle}</td>
              </tr>
              <tr>
                <th>Company Name</th>
                <td>{job.companyName}</td>
              </tr>
              <tr>
                <th>Minimum Qualification</th>
                <td>{job.jobQualification}</td>
              </tr>
              <tr>
                <th>Experience Level</th>
                <td>{job.jobExperience}</td>
              </tr>
              <tr>
                <th>Job Location</th>
                <td>{job.jobLocation}</td>
              </tr>
              <tr>
                <th>Job Type</th>
                <td>{job.jobType}</td>
              </tr>
              <tr>
                <th>Job Category</th>
                <td>{job.jobCategory}</td>
              </tr>
              <tr>
                <th>Estimated Sallary</th>
                <td>${parseInt(job.jobSalary)}</td>
              </tr>
              <tr>
                <th>Application Link</th>
                <td>{job.applicaionLink}</td>
              </tr>
              <tr>
                <th>Company Website</th>
                <td>{job.companyWeb}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="midDetails">
          <p className='midTitle'>Job Description</p>
          <div className="jobdescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur similique neque expedita corporis ipsa molestias suscipit ad necessitatibus. Aliquid vitae soluta voluptatibus accusantium cumque blanditiis tempore suscipit sint rem aliquam sapiente ipsum magni, quibusdam ad quisquam iure inventore aut corporis voluptate libero temporibus nostrum mollitia. Porro, tempora maxime saepe voluptate quisquam consequatur, perferendis autem quo aut, veniam totam necessitatibus. Minus sint eaque accusamus quae praesentium voluptatibus! Debitis at adipisci labore exercitationem ullam unde, sequi odio suscipit, cumque natus iusto ex sit vero? Culpa voluptatibus aliquam quia quisquam cupiditate esse eaque, expedita quo, inventore debitis, similique error cumque assumenda laboriosam?
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  )
}

export default Details