import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {
//this class holds state of bot location
  state = {
    allBots: [],
    myBots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    //console.log(data)
      this.setState({ 
      allBots: data
     })
   });
  }

//handle click event on card to switch state of bot between
//my army and general collection 
//use spread operator to safely add bot to array
  enlistBot = (clickedBot) => {
    if (this.state.myBots.includes(clickedBot)) {
      this.setState({
        myBots: this.state.myBots.filter(bot => clickedBot.id !== bot.id)
     })} else {
    this.setState({
      myBots: [...this.state.myBots, clickedBot],
    })}
  }

//clickedBot.id == bot.id filters to just view that specific bot

  render() {
    // console.log(this.state.allBots)
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots}
        enlistBot={this.enlistBot}
          />
        <BotCollection allBots={this.state.allBots} 
        enlistBot={this.enlistBot}/>
        
      </div>
    );
  }

}

export default BotsPage;
