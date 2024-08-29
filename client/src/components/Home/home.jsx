import React, { Component } from 'react'
import "./home.css"
import Nav from '../navBar/nav'

export default class Home extends Component {
  render() {
    return (
      
      <div>
        <Nav/>
          <div className="com-div">
              <h1>WELLCOME TO OUR PORTAL</h1>
          </div>
      </div>
    )
  }
}
