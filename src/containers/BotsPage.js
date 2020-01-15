import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import NavBar from "../components/NavBar";

class BotsPage extends React.Component {
  state = {
    allBots: [],
    classBots: [],
    yourBots: [],
    botSpecs: '',
    searchValue: '',
    filterValue: 'No filter'
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        this.setState({
          allBots: data,
          classBots: data
        })
      })
  }

  handleSelected = bot => {
    this.setState({
      botSpecs: bot
    })
  }

  handleEnlist = bot => {
    if (!this.state.yourBots.includes(bot)) {
      let newYourBots = [...this.state.yourBots, bot]
      this.setState({
        yourBots: newYourBots
      })
    }
  }

  handleBack = bot => {
    this.setState({
      botSpecs: ''
    })
  }

  handleRemoved = bot => {
    let newYourBots = [...this.state.yourBots].filter(yourBot => yourBot !== bot)
    this.setState({
      yourBots: newYourBots
    })
  }

  handleSearch = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  handleFilter = (e) => {
    let TempAllBots
    if (e.target.value === 'No filter') {
      TempAllBots = this.state.allBots
    } else {
      TempAllBots = [...this.state.allBots].filter(bot => bot.bot_class === e.target.value)
    }
    this.setState({
      classBots: TempAllBots
    })
    this.setState({
      filterValue: e.target.value
    })
  }

  render() {

    let filteredBots = [...this.state.classBots].filter(bot => 
        bot.name.toLowerCase().startsWith(this.state.searchValue.toLowerCase()))

    let xXx
    if (this.state.botSpecs) {
      xXx = <BotSpecs bot={this.state.botSpecs}
                      handleEnlist={this.handleEnlist}
                      handleBack={this.handleBack}/>
    } else {
      xXx = (
        <div>
          <NavBar searchValue={this.state.searchValue}
                  handleSearch={this.handleSearch}
                  filterValue={this.state.filterValue}
                  handleFilter={this.handleFilter} />
          <BotCollection allBots={filteredBots}
                         handleSelected={this.handleSelected}/>
        </div>
      )
    }

    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots}
                     handleRemoved={this.handleRemoved}/>
        {xXx}
      </div>
    );
  }

}

export default BotsPage;
