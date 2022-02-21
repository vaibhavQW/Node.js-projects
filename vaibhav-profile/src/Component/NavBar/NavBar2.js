import React, { Component } from 'react'
import "./NavBar2.css"

export default class NavBar2 extends Component {
  render() {
    return (
      <header>
           <nav className='navbar navbar-dark bg-dark py-4' id="navV">
               <a href="https://www.linkedin.com/in/vaibhav-singh-05108014b/" className='text-decoration-none text-light Float-right px-2'>LinkedIn</a>
               <a href="/contact" className='text-decoration-none text-light Float-right px-2 px-4'>Contact</a>
               <a href="https://twitter.com/Streak08426524" className='text-decoration-none text-light Float-right px-2'>@Streak08426524</a>
           </nav>
      </header>
    )
  }
}
