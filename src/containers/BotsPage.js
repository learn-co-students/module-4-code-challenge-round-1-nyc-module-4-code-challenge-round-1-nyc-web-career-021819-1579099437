import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    botCollection: [],
    botArmy:[]
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => 
      // console.log(data)
      this.setState({
        allBots: data,
        botCollection: data
      })
    )
  }

  componentDidUpdate(prevProps,prevState) {
    console.log("prevState:", prevState)
    console.log("state:", this.state)
  }

  addToArmy = (bot) => {
    if (this.state.botArmy.includes(bot)){
      null
    }else{
      this.setState({
        botArmy: [...this.state.botArmy,bot]
      })
    }
  }

  rmvFromArmy = (bot) => {
    let botIndex = this.state.botArmy.indexOf(bot)
    let newArmy = this.state.botArmy
    newArmy.splice(botIndex,1)
    console.log(newArmy)

    this.setState({
      botArmy: this.state.botArmy
    })
    
  }


  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy botArmy = {this.state.botArmy} rmvFromArmy = {this.rmvFromArmy}/>
        <BotCollection botCollection = {this.state.botCollection} addToArmy = {this.addToArmy}/>

      </div>
    );
  }

}

export default BotsPage;
 