import React, { Component } from 'react'

 class UserItem extends Component {
  
  render() {
    const { login,avatar_url,html_url } =this.props.user;
    return (
      <div className="card text-center">
        <img src={avatar_url}
         alt="" className="round-img text-center mx-auto"
          style={{width:'60px',
          margin:'10px'}}/>
        <h3>{login}</h3>
        
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>

      </div>

        </div>
    )
  }
}

export default UserItem;