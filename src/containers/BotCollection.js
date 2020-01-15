import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy";

class BotCollection extends React.Component {
  //your code here

//   state = {
// 	bots: this.props.botsArray
//   }

 handleOnClick = () => {
	// props.yourBotArray = [...props.yourBotArray, e.target]
	<YourBotArmy yourBotArray={this.state.yourBotArray}/>
    
  }

  render(){
	console.log(this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row" >
    		  {/*...and here..*/}
    		  {this.props.botsArray.map((bot, yourBot) => <BotCard bot={bot}  yourBot={yourBot} onClick={this.handleOnClick}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
