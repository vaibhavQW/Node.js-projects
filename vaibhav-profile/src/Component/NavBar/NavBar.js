import React, { Component } from 'react'
import "./NavBar.css"

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       MenuClicked:false,
       width:null,
    }
  }
  componentDidMount() {
    this.getDimensions(); 
  
    //add dimensions listener for window resizing
    window.addEventListener('resize', this.getDimensions); 
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.getDimensions); 
  }
  //actually set the state to the window dimensions
getDimensions = () => {
  this.setState({ width: window.innerWidth});
}
toggleData = () =>{
  if(this.state.MenuClicked){this.setState({MenuClicked:false})}
  else{this.setState({MenuClicked:true})}
}
  render() {
    if(this.state.width>642){
      return(
          <header>
            <nav className='navbar navbar-dark bg-dark py-4' id="navV">
             <a href="/" className='bg-dark text-light border-0 text-decoration-none h5 '>
               Vaibhav Singh
             </a>
             <a href="https://www.linkedin.com/in/vaibhav-singh-05108014b/" className='bg-dark text-light border-0 text-decoration-none Float-right mx-3'>LinkedIn profile</a>
             <a href="/contact" className="bg-dark text-light border-0 text-decoration-none Float-right mx-3">Contact</a>
             <a href='https://twitter.com/Streak08426524' className='bg-dark text-light border-0 text-decoration-none Float-right mx-3'>@Streak08426524</a>
             <div className='text-light contact-heading mx-4'>Contact</div>
             <div className=' text-light contact-subheading mx-4'>Send me a message</div>
            </nav>
            
          </header>
        
      );
    }else{
      if(this.state.MenuClicked){
        return (
          <header className="whole-body">
            <div onClick={this.toggleData} className="Float-right display-block">Close</div>
            <a href="/" className='display-block text-decoration-none text-center top-menu'>Home</a>
            <a href="https://www.linkedin.com/in/vaibhav-singh-05108014b/" className='display-block text-decoration-none text-center other-menu'>LinkedIn profile</a>
            <a href="/contact" className='display-block text-decoration-none text-center other-menu'>Contact</a>
            <a href="https://twitter.com/Streak08426524" className='display-block text-decoration-none text-center other-menu'>@Streak08426524</a>
          </header>
        )
      }else{
        return(
            <header>
                <nav className='navbar navbar-dark bg-dark py-4' id="navV">
                 <a href="/" className='bg-dark text-light border-0 text-decoration-none h5 '>
                   Vaibhav Singh
                 </a>
                <span className='menu text-light Float-right py-0' onClick={this.toggleData}>Menu</span>
                
                 {!this.state.MenuClicked?(
                   <span>
                     <div className='text-light contact-heading mx-4'>Contact</div>
                     <div className=' text-light contact-subheading mx-4'>Send me a message</div>
                   </span>
                 ):(<></>)}
                </nav>
                
              </header>
        )
      }
    }
  }
    
}


//<a href="https://www.linkedin.com/in/vaibhav-singh-05108014b/" className=' text-light border-0 text-decoration-none Float-right mx-3 display-block'>LinkedIn profile</a>
//<a href="/contact" className=" text-light border-0 text-decoration-none Float-right mx-3 display-block">Contact</a>
//<a href='https://twitter.com/Streak08426524' className=' text-light border-0 text-decoration-none Float-right mx-3 display-block'>@Streak08426524</a>