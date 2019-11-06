import React from "react";

import {getInfo} from '../lib/utils.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={search: "notwaldorf"};	  
  }

  handleUpdate(evt){
	this.setState({search: evt.target.value});
  }

  async handleSearch(evt){
	  const user = await getInfo(this.state.search);
	  this.setState({user});
  }


  render() {
    return (
      <div style={{ margin: "auto auto", width: "600px", textAlign: "center" }}>
        <img src="/static/github1.png" className="App-logo" />
        <h2>Github User Search</h2>
	<p><input type='text' value={this.state.search} onChange={this.handleUpdate.bind(this)}/></p>
	<div className="button-style" onClick={this.handleSearch.bind(this)}>Search</div>

        {this.state.user ? <div> 
	    <br /> 
		<h3>{this.state.user.name} </h3>

		<img style={{maxWidth: '100px', maxHeight: "100px" }}
	     	  src= {this.state.user.avatar_url} /> <br />

		
		</div> : null}


	<style jsx>{`
          h1,
          h2,
          a,
          p {
            font-family: "Arial";
          }

	  .button-style {
	  	margin: auto auto;
		cursor: pointer;
		background-color: #4633FF;
		color: #ffffff;
		width: 100px;
		font-family: "Arial";
         }

          .description {
            font-family: "Arial";
            font-size: "10px";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }
          .App-logo {
            height: 80px;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
