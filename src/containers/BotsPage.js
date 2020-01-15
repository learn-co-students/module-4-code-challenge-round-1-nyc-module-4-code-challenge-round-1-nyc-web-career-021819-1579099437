import React from "react";
import BotCollection from '../containers/BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    yourBots: []
  }

  componentDidMount() {
    fetch ('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res=>res.json())
      .then(bots=> this.setState({
        allBots: bots
      }))
  }

  render() {

    return (
      <div>
        {/* put your components here */}
        <BotCollection allBots={this.state.allBots}/>
      </div>
    );
  }

}

export default BotsPage;
