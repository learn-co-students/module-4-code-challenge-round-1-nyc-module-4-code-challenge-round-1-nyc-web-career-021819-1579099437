import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here


  render(){

	let botsArray = this.props.allBots.map(botObj => {
		return <BotCard bot={botObj} handleArmyClick={this.props.handleArmyClick} key={botObj.id}/>
	})

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {botsArray}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
