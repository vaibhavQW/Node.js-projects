import React, { Component } from 'react'
import "./Footer.css"

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment >
          <div className='ps-5 pt-5'>
         <div >
              <a href='/' className='d-inline-block link px-2'>Home</a>
              <a href='https://stackoverflow.com/users/7206791/streak' className='d-inline-block link endLink'>Stack Overflow</a>  
         </div>
         <div>
              <a href='/contact' className='d-inline-block link px-2'>Contact</a>
              <a href="https://github.com/vaibhavQW" className='d-inline-block link endLink'>GitHub</a>      
          </div>  
          <div className='text-muted copyright'>
              Copyright &copy; Vaibhav Singh -{new Date().getFullYear()}  
          </div>   
          </div>
      </React.Fragment>
    )
  }
}
