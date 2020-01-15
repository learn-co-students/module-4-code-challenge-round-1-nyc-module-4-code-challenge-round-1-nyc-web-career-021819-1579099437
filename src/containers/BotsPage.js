import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botsArray: [],
    yourBotArray: []
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(botsArray => {this.setState({botsArray})})
  }

  render() {
    console.log(this.state.botsArray)
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy yourBotArray={this.state.yourBotArray}/>
        <BotCollection  botsArray={this.state.botsArray} yourBotArray={this.state.yourBotArray}/>
      </div>
    );
  }

}

export default BotsPage;
