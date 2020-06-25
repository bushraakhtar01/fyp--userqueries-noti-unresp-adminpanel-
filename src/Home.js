import React,{Component} from "react";
import Khaadi from "./Khaadi";
import AdminUI from "./AdminUI";
import Login from "./Login";



class Home extends Component{

    componentDidMount(){
        if(!sessionStorage.getItem("userData")){
            
            this.props.history.push('/mainpage')
        }
    }

    render(){


        
            return(
                <div>
                       
                    <AdminUI/>
           
                </div>
            )
        
   
    }
}


export default Home;