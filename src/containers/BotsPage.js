import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    allBots: [],
    yourBots: [],
    botSpecs: ''
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        this.setState({
          allBots: data
        })
      })
  }

  handleSelected = bot => {
    this.setState({
      botSpecs: bot
    })
  }

  handleEnlist = bot => {
    if (!this.state.yourBots.includes(bot)) {
      let newYourBots = [...this.state.yourBots, bot]
      this.setState({
        yourBots: newYourBots
      })
    }
  }

  handleBack = bot => {
    this.setState({
      botSpecs: ''
    })
  }

  handleRemoved = bot => {
    let newYourBots = [...this.state.yourBots].filter(yourBot => yourBot !== bot)
    this.setState({
      yourBots: newYourBots
    })
    
  }

  render() {

    let xXx
    if (this.state.botSpecs) {
      xXx = <BotSpecs bot={this.state.botSpecs}
                      handleEnlist={this.handleEnlist}
                      handleBack={this.handleBack}/>
    } else {
      xXx = <BotCollection allBots={this.state.allBots}
                           handleSelected={this.handleSelected}/>
    }

    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots}
                     handleRemoved={this.handleRemoved}/>
        {xXx}
      </div>
    );
  }

}

export default BotsPage;
