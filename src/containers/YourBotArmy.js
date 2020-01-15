import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderSelectedBotsData = () => {
	  return this.props.selectedBots.map(bot => <BotCard key={bot.id} bot={bot} removeSelectedBot={this.props.removeSelectedBot} />)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
          </div>
            {this.renderSelectedBotsData()}
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
