import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here

  checkView = () => {
	  if (this.props.viewBot) {
		  return <BotSpecs 
		  handleView = {this.props.handleView}
		  handleSelection = {this.props.handleSelection}
		  handleBack = {this.props.handleBack}
		  bot = {this.props.viewBot} />
	  } else {
		   return (this.props.allBots.map(bot => <BotCard
			bot = {bot} 
			handleSelection = {this.props.handleSelection} 
			handleUnselection = {this.props.handleUnselection}
			handleView = {this.props.handleView}
		  />))
	  }
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{this.checkView()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
