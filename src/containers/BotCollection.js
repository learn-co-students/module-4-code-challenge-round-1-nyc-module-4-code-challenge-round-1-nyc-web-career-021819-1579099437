import React from "react";
import BotCard from "../components/BotCard";

//map over allBots array and assign props to values
//bring props down to BotCard
class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {this.props.allBots.map(bots => (<BotCard
				bot={bots}
				enlistBot={this.props.enlistBot}
				// key={bots.id}
				// name={bots.name}
				// health={bots.health}
				// damage={bots.damage}
				// armor={bots.armor}
				// bot_class={bots.bot_class}
				// catchphrase={bots.catchphrase}
				// avatar_url={bots.avatar_url}
				/>))}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
