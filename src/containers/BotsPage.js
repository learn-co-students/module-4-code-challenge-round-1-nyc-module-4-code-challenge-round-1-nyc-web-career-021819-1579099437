import React from "react";
import BotCollection from "../containers/BotCollection"
import YourBotArmy from "../containers/YourBotArmy"


class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    yourBots : [],
    viewBot: null
  }

   // map over all robots and if selected robot by id matches current robot
    // add to your bots
    // then map over all robots again and if selected robot by id doesnt match
    // add to not your bots

  handleSelection = (props) => {
    // this.state.allBots.map(bot => {
    //   if (bot.id === props.bot.id) {
    //     this.setState({yourBots : [...this.state.yourBots, bot]})
    //     bot.signaler = "true"
    //   }
    // })
    props.bot.signal? null : this.setState({yourBots : [...this.state.yourBots, props.bot]})
    props.bot.signal = true
  }

  handleUnselection = (props) => {
    let x = this.state.yourBots.filter(bot => bot.id !== props.bot.id)
    this.setState({yourBots : x })
    props.bot.signal = false

    // this.setState({yourBots: []})
    // this.state.yourBots.map(bot => {
    //   if (bot.id !== props.id) {
    //     this.setState({yourBots : [...this.state.yourBots, bot]})
    //   }
    // })
  }

  handleView = (props) => {
    this.setState({viewBot : props.bot})
    console.log(this.state.viewBot)

  }

  handleBack = () => {
    this.setState({viewBot : null})
  }


  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      this.setState({allBots: data})
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
    // console.log("Not your bots", notYourBots)
    // console.log("Your bots", yourBots)
    // let notYourBots = this.state.allBots.filter(bot => bot.signaler !== "true")

  


    return (
      <div>
        <YourBotArmy 
        handleView = {this.handleView}
        yourBots = {this.state.yourBots}
        handleUnselection = {this.handleUnselection}
        handleSelection = {this.handleSelection}/>
        <BotCollection
        handleBack = {this.handleBack}
        viewBot = {this.state.viewBot}
        allBots = {this.state.allBots} 
        handleView = {this.handleView}
        handleUnselection = {this.handleUnselection}
        handleSelection = {this.handleSelection} />
      </div>
    );
  }

}

export default BotsPage;
