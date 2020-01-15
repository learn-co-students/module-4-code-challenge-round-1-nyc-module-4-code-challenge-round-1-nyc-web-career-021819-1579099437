import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botData: [],
    selectedBots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(botData => {
        this.setState({
          botData: botData
        })
      })
  }

  addSelectedBot = (selectedBot) => {
    if (this.state.selectedBots.find(bot => bot.id === selectedBot.id)) {
      return null
    } else {
      this.setState({
        selectedBots: [...this.state.selectedBots, selectedBot]
      })
      
    }
  }

  removeSelectedBot = (selectedBot) => {
    this.setState({
      selectedBots: this.state.selectedBots.filter(bot => bot.id !== selectedBot.id)
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy selectedBots={this.state.selectedBots} removeSelectedBot={this.removeSelectedBot} />
        <BotCollection botData={this.state.botData} addSelectedBot={this.addSelectedBot} />
      </div>
    );
  }

}

export default BotsPage;
