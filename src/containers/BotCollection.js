import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  
	renderBotData = () => {
	  return this.props.botData.map(bot => <BotCard key={bot.id} bot={bot} addSelectedBot={this.props.addSelectedBot} changeBotSpec={this.props.changeBotSpec} />)
  	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				Collection of all bots
    		</div>
			{this.renderBotData()}
  	  </div>
  	);
  }

};

export default BotCollection;
