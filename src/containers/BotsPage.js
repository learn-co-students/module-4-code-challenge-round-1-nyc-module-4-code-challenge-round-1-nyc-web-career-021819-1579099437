import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    chosenBots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(j => j.json()).then(a => {
      this.setState({bots: a})
    })
  }

  chooseBot = (id) => {
    if (this.state.chosenBots.find((bot) => bot.id === id)) {
      let chosenBot = this.state.chosenBots.find((bot) => bot.id === id)
      let newBots = this.state.chosenBots.filter((bot) => bot.id !== id)
      // debugger
      this.setState({bots: [...this.state.bots, chosenBot], chosenBots: newBots})
    } else {
      let newBots = this.state.bots.filter((bot) => bot.id !== id)
      let chosenBot = this.state.bots.find((bot) => bot.id === id)
      // debugger
      this.setState({bots: newBots, chosenBots: [...this.state.chosenBots, chosenBot]})
    }
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={this.state.chosenBots} chooseBot={this.chooseBot}/>
        <BotCollection bots={this.state.bots} chooseBot={this.chooseBot} />
      </div>
    );
  }

}

export default BotsPage;
