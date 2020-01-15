import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  //at some point I need to make the onclick change the state of Botcard to be clicked on so that it moves onto this page?
  //I'm just not fully sure how to add that attribute
  //then filter it and where? (assuming I'm adding all the stuff here.)
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {/* failed here :/ had a recruited state. */}
            Your Bot Army
            <BotCard/>
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
