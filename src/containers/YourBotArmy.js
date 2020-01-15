import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    let yourBotsArray = this.props.yourBots.map(botObj => {
      return <BotCard bot={botObj} handleArmyClick={this.props.handleArmyClick} key={botObj.id}/>
    })

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {yourBotsArray}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
