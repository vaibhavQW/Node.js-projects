import React, { Component } from 'react'
import NavBar from "../NavBar/NavBar"
import "./Contact.css"

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
          <NavBar />
          <div className='ps-5 pt-5'>
              <div className='inputCaption'>Your E-mail</div>
              <div><input className='bg-secondary input1' /></div>
          </div>
          <div className='ps-5 pt-5'>
              <div className='inputCaption'>Message</div>
              <div><textarea className='bg-secondary input2' /></div>
          </div>
          <div className='ps-5 pt-3'>
              <button className='border-0 bg-dark text-light buttonContact'>Submit</button>
          </div>
      </React.Fragment>
    )
  }
}
