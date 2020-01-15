import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy"

class BotCollection extends React.Component {
  //your code here
  state ={
	recruited: false
  }


  handleclick(){
	console.log("say something")
	this.setState({recruited : !this.state.recruited})
  }

  render(){
	console.log(this.props)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {/*...and here..*/}
			  {<YourBotArmy />}
    		  Collection of all bots
			  {this.props.bots.map(robot =>  <BotCard bots = {robot} key = {robot.id} handleclick = {this.handleclick} />)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

//recruiting to our bot army DOES NOT delete them from our original card list, this is important.