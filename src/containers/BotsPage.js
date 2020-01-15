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
//state of allBots switches t/f?
//use spread operator to safely add bot to array
//remove from old collection
  enlistBot = (clickedBot) => {
    // this.setState({
    //   // allBots: 
    //   myBots: [...this.state.myBots, clickedBot]
    // })
    console.log(clickedBot, "hi")
  }

  render() {
    console.log(this.state.allBots)
    return (
      <div>
        <BotCollection allBots={this.state.allBots} 
        enlistBot={this.enlistBot}/>
        <YourBotArmy myBots={this.state.myBots}
        enlistBot={this.enlistBot()}
        />
      </div>
    );
  }

}

export default BotsPage;
