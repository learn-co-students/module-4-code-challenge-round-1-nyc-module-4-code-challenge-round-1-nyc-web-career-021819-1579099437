import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy";

class BotCollection extends React.Component {
  //your code here


 handleOnClick = (newBot) => {
	// props.yourBotArray = [...props.yourBotArray, e.target]
	this.setState({yourBots: [...this.props.yourBotArray, newBot]})
    
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row" >
    		  {/*...and here..*/}
    		  {this.props.botsArray.map((bot, yourBot) => <BotCard bot={bot}  handleOnClick={this.handleOnClick}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
