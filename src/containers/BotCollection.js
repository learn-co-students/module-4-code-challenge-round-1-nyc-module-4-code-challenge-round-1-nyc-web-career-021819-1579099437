import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
 bots = this.props.botCollection
 
state ={
	  allBots: this.bots,
	  currentBot: null
	  
  }

  componentDidMount() {
	  this.setState({
		  allBots: this.props.botCollection
	  })
  }


  renderBots = (bots) => {
	// console.log(bots)  
	return bots.map( each => <BotCard key = {each.id} bot = {each} handleClick = {this.renderBotSpecs}/>)
  }

  renderBotSpecs = (bot) => {
	  console.log(bot)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots(this.props.botCollection)}
    		  Collection of all bots
			  {/* {this.renderBotSpecs(this.State.currentBot)} */}

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
 