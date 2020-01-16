import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    // console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {/* {<BotCard bots = {this.props.bots}/>} */}
            {this.props.bots.map(buts => <BotCard bots = {buts} key = {buts.id} handleclick = {this.props.handleclick}/>)}

          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
