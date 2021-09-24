import React from 'react'

export  function Menu() {
    return (
        <div >
            <div className="ui pointing menu">
  <a className="item">
    Home
  </a>
  <a className="item">
    Messages
  </a>
  <a className="item active">
    Friends
  </a>
  <div className="right menu">
    <div className="item">
      <div className="ui transparent icon input">
        <input type="text" placeholder="Search..."/>
        <i className="search link icon"></i>
      </div>
    </div>
  </div>
</div>
<div className="ui segment">
  <p></p>
</div>
        </div>
    )
}
