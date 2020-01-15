import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	let botsArray = this.props.allBots.map((bot) => <BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/* Collection of all bots */}
			  {botsArray}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
