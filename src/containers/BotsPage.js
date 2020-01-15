import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    yourBots: []
  }

  componentDidMount() {
    fetch ('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res=>res.json())
      .then(bots=> this.setState({
        allBots: bots
      }))
  }

  handleArmyClick = (bot) => {
    console.log('clicking add to army for this bot: ', bot)
    this.setState({
      yourBots: [...this.state.yourBots, bot]
    })
  }

  render() {

    return (
      <div>
        {/* put your components here */}
        <BotCollection 
        allBots={this.state.allBots} 
        handleArmyClick={this.handleArmyClick}
        />

        <YourBotArmy 
        yourBots={this.state.yourBots}/>
      </div>
    );
  }

}

export default BotsPage;
