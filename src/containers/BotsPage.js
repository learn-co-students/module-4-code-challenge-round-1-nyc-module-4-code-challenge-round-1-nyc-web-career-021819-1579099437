import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botData: [],
    selectedBots: [],
    botSpecData: [],
    botSpec: false
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

  changeBotSpec = (bot) => {
    console.log('I hit this')
    this.setState({
      botSpec: true,
      botSpecData: [bot]
    })
  }

  changeBotSpecAgain = () => {
    this.setState({
      botSpec: false
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy selectedBots={this.state.selectedBots} removeSelectedBot={this.removeSelectedBot} />
        {this.state.botSpec ? <BotSpecs botSpecData={this.state.botSpecData} changeBotSpecAgain={this.changeBotSpecAgain} addSelectedBot={this.addSelectedBot} /> : <BotCollection botData={this.state.botData} addSelectedBot={this.addSelectedBot} changeBotSpec={this.changeBotSpec} />}
      </div>
    );
  }

}

export default BotsPage;
