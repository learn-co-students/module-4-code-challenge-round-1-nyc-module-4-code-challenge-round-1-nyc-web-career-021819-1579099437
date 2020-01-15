import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    yourBots: [],
    showPage: false,
    showBot: {}
  }

  componentDidMount() {
    fetch ('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res=>res.json())
      .then(bots=> this.setState({
        allBots: bots
      }))
  }

  handleArmyClick = (bot) => {
    // console.log('clicking add to army for this bot: ', bot)
    if (this.state.yourBots.some(item => bot.id === item.id)) {
      // console.log('need to remove bot from yourBots')
      this.setState({
        yourBots: this.state.yourBots.filter(item => item.id !== bot.id)
      })
    } else {
        this.setState({
          yourBots: [...this.state.yourBots, bot]
        })
    }
  }

  renderShowPage = (bot) => {
    this.setState({
      showPage: !this.state.showPage,
      showBot: bot
    })
  }

  backToList = () => {
    this.setState({
      showPage: !this.state.showPage
    })
  }

  handleSort = () => {
    // console.log('clicking on the sort button')
    
    let sortedBots = [...this.state.allBots].sort(function (a, b) {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    });

    this.setState({
      allBots: sortedBots
    })
  }

  render() {

    return (
      <div>
    
        <YourBotArmy 
        yourBots={this.state.yourBots}
        handleArmyClick={this.handleArmyClick}
        renderShowPage={this.renderShowPage}
        />

        <button onClick={this.handleSort} >Sort Bot Collection Alphabetically</button>
        <br></br>
        <br></br>

        {this.state.showPage ? 

          <BotSpecs 
          bot={this.state.showBot} 
          handleArmyClick={this.handleArmyClick} 
          backToList={this.backToList} 
          renderShowPage={this.renderShowPage} /> 
            : 
            
          <BotCollection 
          allBots={this.state.allBots} 
          handleArmyClick={this.handleArmyClick} 
          renderShowPage={this.renderShowPage}/>}

      </div>
    );
  }

}

export default BotsPage;
