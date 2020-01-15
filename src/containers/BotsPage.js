import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(data => {
        this.setState({
          bots: data
        })
      })
  }

  addBot = botToAdd => {
    if (!this.state.army.includes(botToAdd))
    this.setState({
      army: [...this.state.army, botToAdd ]
    })
  }

  removeBot = botToRemove => {
    this.setState({
      army: [...this.state.army.filter(bot => bot !== botToRemove)]
    })
  }

  render() {
    // console.log(this.state.army)
    return (
      <div>
        <YourBotArmy army={this.state.army} removeBot={this.removeBot} />
        <BotCollection bots={this.state.bots} addBot={this.addBot} />
      </div>
    );
  }

}

export default BotsPage;
