import React, {  } from 'react'
import "./addnew.css"
import NavBar from '../navBar/nav'

const addnew =()=> {
    return (
      <div>
        <NavBar />
          <div class="container">
        <h1>Client Job Details Form</h1>
        <form action="/submit-job-details" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="clientName">Name:</label>
                <input type="text" id="clientName" name="clientName" />
            </div>
            <div class="form-group">
                <label for="companyName">Company/Organization (if applicable):</label>
                <input type="text" id="companyName" name="companyName"/>
            </div>
            <div class="form-group">
                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email"/ >
            </div>
            <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" />
            </div>
            <div class="form-group">
                <label for="contactMethod">Preferred Contact Method:</label>
                <select id="contactMethod" name="contactMethod" >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </select>
            </div>
            <div class="form-group">
                <label for="jobTitle">Job Title/Role:</label>
                <input type="text" id="jobTitle" name="jobTitle" />
            </div>
            <div class="form-group">
                <label for="jobDescription">Description of the Job:</label>
                <textarea id="jobDescription" name="jobDescription" rows="4" ></textarea>
            </div>
            <div class="form-group">
                <label for="jobLocation">Job Location:</label>
                <input type="text" id="jobLocation" name="jobLocation" />
            </div>
            <div class="form-group">
                <label for="workType">Type of Work:</label>
                <select id="workType" name="workType" >
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="temporary">Temporary</option>
                    <option value="internship">Internship</option>
                </select>
            </div>
            <div class="form-group">
                <label for="startDate">Estimated Start Date:</label>
                <input type="date" id="startDate" name="startDate" />
            </div>
            <div class="form-group">
                <label for="endDate">Estimated End Date:</label>
                <input type="date" id="endDate" name="endDate"/>
            </div>
            <div class="form-group">
                <label for="budget">Budget:</label>
                <input type="text" id="budget" name="budget"/>
            </div>
            <div class="form-group">
                <label for="preferredSkills">Preferred Skills/Qualifications:</label>
                <textarea id="preferredSkills" name="preferredSkills" rows="4"></textarea>
            </div>
            <div class="form-group">
                <label for="specialRequirements">Special Requirements:</label>
                <textarea id="specialRequirements" name="specialRequirements" rows="4"></textarea>
            </div>
            <div class="form-group">
                <label for="attachments">Attachments:</label>
                <input type="file" id="attachments" name="attachments"/>
            </div>
            <div class="form-group checkbox">
                <input type="checkbox" id="terms" name="terms" />
                <label for="terms">I agree to the <a href="/terms-and-conditions" target="_blank">terms and conditions</a></label>
            </div>
            <div class="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
      </div>
    )
  }
export default addnew
