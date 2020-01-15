import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {
				  this.props.allBots.map((bot) => {
					  return (
						  <BotCard
							  key={bot.id}
							  bot={bot}
							  botCardClick={this.props.botCardClick}
						  />
					  )
				  })
			  }
    		</div>
  	  </div>
  	);		
  }

};

export default BotCollection;
