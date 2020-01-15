import React from "react";
import BotCard from "../components/BotCard";
import BotCollection from "./BotCollection"

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBots = (bots) => {
    // console.log(bots)  
    return bots.map( each => <BotCard key = {each.id} bot = {each} handleClick = {this.props.rmvFromArmy}/>)
    }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots(this.props.botArmy)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
