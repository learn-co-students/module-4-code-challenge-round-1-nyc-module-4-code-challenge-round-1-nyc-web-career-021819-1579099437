import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  state = {
    allBots: [],
    armyBots: []
  }

  componentDidMount() {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(response => {return response.json()})
    .then(allBotsFromFetch => {
      this.setState({allBots: allBotsFromFetch})
    })
  }

  botCardClick = (curBot) => {
    // if (this.state.armyBots.find (bot => bot.id === curBot.id) {
    //   // dont do anything
    // } else {
    //   this.setState({
    //     armyBots: this.state.armyBots.concat([curBot])
    //   })
    // }
        this.setState({
          armyBots: this.state.armyBots.concat([curBot])
        })
  }

  render() {
    return (
      <div>
          <BotCollection 
            allBots={this.state.allBots}
            botCardClick={this.botCardClick}
          />

          <YourBotArmy 
            armyBots={this.state.armyBots}
          />
        
      </div>
    );
  }

}

export default BotsPage;

// things just didnt go well today...
// i made too many mental errors with spelling, which are up too much time
// i was able to get the armybots to render
// i was then booted from the wifi which also threw me for a loop, eating up more time
// i know how to complete each deliverable
// deliverable #3:
//     armybots collection maps over armybots from app state armybots
//     every time click on bot in BotCollection, add to app state armybots
//     add conditional so that the action only fires if it doesnt exist in that Array

// time now: 11:16
