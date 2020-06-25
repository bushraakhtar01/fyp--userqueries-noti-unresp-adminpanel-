import React from 'react';
import axios from 'axios';
import './adminui.css'


class query extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      queries:[{}]
    }}

   async componentDidMount(){
    if(!sessionStorage.getItem("userData")){
        
      this.props.history.push('/login')
  }else{
  const url="http://localhost/queries/api/post/read.php";
  const response=await fetch(url
    ,
    {
      method: 'GET',
    // mode: "no-cors",
    //  headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    // }
  }

);
  const data= await response.json();
  // console.log(response);
 this.setState({queries:data.data});

}
} 
render(){
 
  return(
  
  <div className="container-fluid bg-primary mt-2 p-3 ">
    <div className="row bg-info">
      <div className="col">
        <h2>User Queries/Comments</h2>
      </div>
      </div>
      <div className="row px-lg-3 px-md-3 px-sm-3 px-1 pt-5">
        
          <div className="col">
        <div className="table-responsive tb">
        <table className="table table-striped table-dark">
        <thead>
          <tr>
          <td colSpan='1'>Id</td>
            <td>User</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Date</td>
            <td>Queries</td>
          </tr>
        </thead>
        <tbody>
          {this.state.queries.map(querie => (
          <tr>
           
            <td>{querie.id}</td>
            <td>{querie.uname}</td>
            <td>{querie.email}</td>
            <td>{querie.phone}</td>
            <td>{querie.date_query}</td>
            <td>{querie.comments}</td>



          </tr>
          )
          )}
          {/* <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
        </div>
      </div>
      </div>
  </div>
  
  )
}


}
export default query;