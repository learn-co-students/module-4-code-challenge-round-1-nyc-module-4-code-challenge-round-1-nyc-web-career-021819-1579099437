import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here
 bots = this.props.botCollection
 
state ={
	  allBots: null,
	  currentBot: null
	  
  }

  componentDidMount() {
	  this.setState({
		  allBots: this.props.botCollection
	  })
  }


  renderBots = (bots) => {
	// console.log(bots)  
	return bots.map( each => <BotCard key = {each.id} bot = {each} handleClick = {this.props.addToArmy}/>)
  }

   // save selected bot to state then render the single bot spec component instead of the full list of all
   // "add bot to army will not"
  renderBotSpecs = (currBot) => {
	//   this.setState({
	// 	  currentBot:currBot
	//   })
	  
	//   console.log(bot)
	//  <BotSpecs bot ={bot}/>
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots(this.props.botCollection)}
    		  Collection of all bots
			  {/* {this.renderBotSpecs(this.State.currentBot)} */}
			{this.renderBotSpecs(this.state.currentBot)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
 