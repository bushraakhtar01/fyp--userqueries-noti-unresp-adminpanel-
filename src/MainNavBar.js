import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  './main.css';

class TopNav extends Component{
       
componentDidMount(){
  document.addEventListener('scroll', function() {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
  
    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', myFunction);
    var header = document.getElementById("container");
var sticky = header.offsetTop;
window.onscroll = function() {myFunction()};



function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
})


document.addEventListener('scroll', function() {

  window.addEventListener('scroll', scrollFunction);

  var mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};

  
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

document.getElementById("myBtn").onclick = function 
topFunction(){


    if(window.scrollY!=0)
    {
        setTimeout(function() {
           window.scrollTo(0,window.scrollY-30);
            topFunction();
        }, 10);
     }
  }

})

}
    render(){
        
   
        return(

            <div className="container-fluid" id='container' >
                  <button   id="myBtn" title="Go to top"><i class="arrow up icon"></i></button>
               {/* logo row */}
               <div className="row">
                  <div className="col">
                 <Link to="/mainpage"> <center><img src="logo1.jpg" className="mainlogo"/></center></Link>
                
                  </div>

               </div>
              
                  {/* sign in , register and cart row */}

                <div className="row" >
                 <div className="col " id="signinpara"  >
                     <ul style={{float:'right'}} >
                        <li className="login-cart"  ><i class="user outline large icon"></i> &nbsp; &nbsp; </li>
                        <li className="login-cart"><i class="shopping cart large icon"></i></li>
                        
                     </ul>
                  </div>
                   </div>
                      
               <nav className="navbar navbar-expand-lg navbar-light " >
  <button  className="navbar-toggler navtogglebutton" type="button"  data-toggle="collapse"  data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"  ></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNav"   >
    <ul className="navbar-nav" >
       
      <li class="nav-item" >
        <p  > NEW ARRIVALS &nbsp; &nbsp;</p>
        
   
      </li>
      <li class="nav-item">
        <p > UNSTITCHED &nbsp; &nbsp;</p>
        
      </li>
      <li class="nav-item">

        <p > STITCHED &nbsp; &nbsp;</p>
      </li>
      <li class="nav-item">
      
        <p >FANCY &nbsp; &nbsp;</p>
      </li>
      <li class="nav-item">
      
          <p > KURTI &nbsp; &nbsp;</p>
      </li>
      <li class="nav-item">
      
      <Link to="/brandfullpage" className="brandsLink"><p > BRANDS &nbsp; &nbsp;</p></Link>  
      </li>
    
    </ul>
  </div>
</nav>
        

              </div>
      
        )
    }

}
export default TopNav;

