import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBots = (bots) => {
	// console.log(bots)  
	return bots.map( each => <BotCard key = {each.id} bot = {each} handleClick = {this.props.addToArmy}/>)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots(this.props.botCollection)}
    		  Collection of all bots

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
 