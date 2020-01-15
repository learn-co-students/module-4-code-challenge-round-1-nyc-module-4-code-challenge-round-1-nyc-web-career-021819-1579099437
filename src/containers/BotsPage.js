import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";



class BotsPage extends React.Component {

  state ={
    allBots: [],
    botArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => {
        this.setState({
          allBots: bots
        });
      });
  }

  handleClick = (botobj) => { 
    if (!this.state.botArmy.includes(botobj)) {
      this.setState({
        botArmy: [...this.state.botArmy, botobj]
      })    
    } else {
      const newbots = this.state.botArmy.filter( bot => bot !== botobj)
      console.log(newbots)
      this.setState ({
        botArmy: newbots
      })
    }
  }

 
  render() {
    return (
      <div>
        <YourBotArmy 
          botArmy={this.state.botArmy}
          handleClick={this.handleClick}
          />
        <BotCollection 
          allBots={this.state.allBots}
          handleClick={this.handleClick}
        />
      </div>
    );
  }

}

export default BotsPage;
