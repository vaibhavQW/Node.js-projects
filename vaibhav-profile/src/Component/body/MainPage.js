import React, { Component } from 'react'

import "./MainPage.css"
import NavBar2 from '../NavBar/NavBar2'
//import Data from "data.json"

export default class MainPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       skills:[],
       profession:"",
    }
  }
  componentDidMount(){
    fetch("data.json",{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(res=>res.json())
    .then(content=>{
      this.setState({name:content[0].name, skills:content[0].skills, profession:content[0].profession})
    })
    .catch(err=>console.log(err))
  }

  render() {
    return (
        <React.Fragment>
            <NavBar2 />
            <div className="d-block bg-primary" id="fullbody"> 
                 <div className='text-center'>
                     <figure>
                     <img src='img/1645374505863.jpg' height="300" id="image1" alt="Vaibhav Singh"/>
                     <figcaption className='h4 text-light'>Hi I am {this.state.name} and I am an aspiring {this.state.profession} from India</figcaption>
                     </figure>
                     <div className='h1 text-light mt-3'>SKILLS</div>
                 </div>
                 <div className='text-center'>
                   <figure className='figu2'>
                     <img src="img/c++.png" className='img2'alt="C++"/>
                     <figcaption className='h5 text-light'>{this.state.skills[0]}</figcaption>
                   </figure>
                   <figure className='figu2'>
                     <img src="img/HTML5_logo_and_wordmark.svg" className='img2' alt="HTML5"/>
                     <figcaption className='h5 text-light'>{this.state.skills[1]}</figcaption>
                   </figure>
                   <figure className='figu2'>
                     <img src="img/CSS3_logo_and_wordmark.svg" className='img2' alt="CSS3"/>
                     <figcaption className='h5 text-light'>{this.state.skills[2]}</figcaption>
                   </figure>
                   <figure className='figu2'>
                     <img src="img/JavaScriptLogo.png" className='img2' alt="JavaScript"/>
                     <figcaption className='h5 text-light'>{this.state.skills[3]}</figcaption>
                   </figure>
                   <figure className='figu2'>
                     <img src="img/ReactJSLogo.jpg" className='img2' alt="ReactJS"/>
                     <figcaption className='h5 text-light'>{this.state.skills[4]}</figcaption>
                   </figure>
                   <figure className='figu2'>
                     <img src="img/NodeJSLogo.png" className='img2' alt="NodeJS"/>
                     <figcaption className='h5 text-light'>{this.state.skills[5]}</figcaption>
                   </figure>
                 </div>
            </div>
        </React.Fragment>
    )
  }
}
