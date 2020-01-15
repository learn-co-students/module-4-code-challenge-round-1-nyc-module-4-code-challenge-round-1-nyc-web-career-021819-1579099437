import React from "react";
import BotCollection from "../containers/BotCollection"
import YourBotArmy from "../containers/YourBotArmy"


class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    // notYourBots : [],
    yourBots : []
  }

   // map over all robots and if selected robot by id matches current robot
    // add to your bots
    // then map over all robots again and if selected robot by id doesnt match
    // add to not your bots

  handleSelection = (props) => {
    this.state.allBots.map(bot => {
      if (bot.id === props.bot.id) {
        this.setState({yourBots : [...this.state.yourBots, bot]})
        bot.signaler = "true"
        console.log(bot)
      }
    })
  }


  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      this.setState({allBots: data})
      console.log(this.state.allBots)
    })
  }


  render() {


    // let rightBots = this.state.allBots.filter(bot => bot.signaler === "true")
    // console.log("rightbots", rightBots)

    
    // let yourBots = this.state.allBots.map(bot => {
    //   if(bot.signaler === "true") {
    //     return bot
    //   }
    // })

    let notYourBots = this.state.allBots.filter(bot => bot.signaler !== "true")

    // console.log("Not your bots", notYourBots)
    // console.log("Your bots", yourBots)

    return (
      <div>
        <YourBotArmy yourBots = {this.state.yourBots}/>
        <BotCollection 
        allBots = {notYourBots} 
        handleSelection = {this.handleSelection} />
      </div>
    );
  }

}

export default BotsPage;
