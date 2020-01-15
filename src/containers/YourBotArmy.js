import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
//add state to determine which page to show (BotCard or Specs)
  state = {
    armyFront: true
  }

    // handle click events in YourBotArmy to 
  //show BotSpecs page
  //add onClick event to cards in Your Army (different file)
  handleClick = () => {
    this.setState({
      armyFront: !this.state.armyFront
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.myBots.map(bots => (<BotCard
              bot={bots}
              handleClick={this.handleClick}
              enlistBot={this.props.enlistBot}/>))}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
