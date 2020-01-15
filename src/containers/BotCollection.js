import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  state={
	  isClicked: true
  }

  render(){
	//   console.log(this.props.allBots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {
				this.props.allBots.map(bot=> {
					return(
					<BotCard
						isClicked={this.state.isClicked}
						key={bot.id}
						bot={bot}
						handleClick={this.props.handleClick}
						removeFromArmy={this.props.removeFromArmy}
					/>)
				})
			  }
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
