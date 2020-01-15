import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";




class BotsPage extends React.Component {

  state ={
    allBots: [],
    botArmy: [],
    selectedBot: null,
    isBotSelected: false
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

  // handleClick = (botobj) => { 
  //   if (!this.state.botArmy.includes(botobj)) {
  //     this.setState({
  //       botArmy: [...this.state.botArmy, botobj]
  //     })    
  //   } else {
  //     const newbots = this.state.botArmy.filter( bot => bot !== botobj)
  //     console.log(newbots)
  //     this.setState ({
  //       botArmy: newbots
  //     })
  //   }
  // }

  handleClick = (botObj) => {
    this.setState({
      selectedBot: botObj,
      isBotSelected: true
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <YourBotArmy 
          botArmy={this.state.botArmy}
          handleClick={this.handleClick}
        />

        {this.state.isBotSelected 
          ? <BotSpecs 
              selectedBot={this.state.selectedBot} 
            />
          : <BotCollection 
              allBots={this.state.allBots} 
              handleClick={this.handleClick}
            />
        }

      </div>
    );
  }

}

export default BotsPage;
