import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    allBots: [],
    soldier: {},
    army: [],

  }

  componentDidMount(){
	  fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
	  .then(response=> response.json())
	  .then(data=> {
		  this.setState({
			  allBots: data
		  })
	  })
  }

  handleClick=(soldier)=>{
    this.setState({
      soldier: soldier
    },()=>{
      this.setState({
        army: [...this.state.army, this.state.soldier]
      },()=> console.log(this.state.army))
    })
  }


  render() {
    return (
      <div>
        <YourBotArmy
          army={this.state.army}
          handleClick={this.handleClick}
        />
        {
          <BotCollection
            allBots={this.state.allBots}
            handleClick={this.handleClick}
          />
        }
      </div>
    );
  }

}

export default BotsPage;
