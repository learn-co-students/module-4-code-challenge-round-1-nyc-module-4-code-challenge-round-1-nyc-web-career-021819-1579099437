import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	console.log(this.props)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
			  {/* bots card */}
			  {this.props.bots.map(robot =>  <BotCard bots = {robot} key = {robot.id} />)}
			  {/* this map isn't working, why? */}
			  {/* {users.map(user => <Item key={user.id}>{user.name}</Item>)} */}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
