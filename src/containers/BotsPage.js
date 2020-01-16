import React from "react";
import BotCollection from "./BotCollection"
//first real lost part, forgot how to import
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one

  /*
  1. Fetching Bots
    Work on fetching data from this API: https://bot-battler-api.herokuapp.com/api/v1/bots. The response should contain an array  of bot objects that are structured as follows:

    //children of Botspage: 
    BotCollection
    YourBotArmy
  */
  state ={
    robots: [],
    displayBots: [],
    clicked : false,
    botSelect : ''
  }


  componentDidMount(){
  fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(resp => resp.json())
    .then(buts => this.setState({robots : buts}))    
  }

  handleclick = (bot) => {
    let army = this.state.displayBots
    console.log(army)
    army.includes(bot)? this.setState(army.splice(army.findIndex(e => e === bot),1)) : this.setState({displayBots : [...army, bot]})
  }  

  specClick = (bot) =>
    {
      console.log("I chooo choo choose you")
      this.setState({clicked : !this.state.clicked})
      console.log(bot)
      this.setState({botSelect : bot})
      console.log(this.state)
    }

        // this.setState({displayBots :})  
    //how do I make them add to the displaybots array here?
    //in normal js, I'd get the target id and put it into the new array from the onlclick.
    //in my original plan, I'd have to pass down a property of recruited?
    //had to ask for help from a friend, wonder if Id be able to recreate on my own.
    //still doesn't work? some sort of async madness
    


  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots = {this.state.displayBots} handleclick = {this.handleclick} />
        {/* <BotSpecs bot = {this.state.robots}/> */}
        {/* <BotCollection bots = {this.state.robots} handleclick = {this.handleclick} specClick = {this.specClick}/> */}
        {this.state.clicked?<BotSpecs bot={this.state.botSelect} handleclick = {this.handleclick} specClick = {this.specClick}/>: <BotCollection bots = {this.state.robots} handleclick = {this.handleclick} specClick = {this.specClick}/> }

        {/* 
        hopeful code: if 
        */}

        {/* idea, since BotSpecs should repalace Botcollection, it's compononent: 
              A: should live here?
              B: work as a ternary?
              C: dependant on B means that I should make a new onclick for changing the state to make the ternary? 
              D: how to pass down the clicked state and show a single guy*/}
      </div>
    );
  }
}
/*4. Improve
Now that you have some of the functionality of your app, it's time to improve the interface. Rather than enlisting the bot into the army, clicking on the card should instead display a show view (BotSpecs) for that bot, which should replace BotsCollection. BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot.
*/

export default BotsPage;

/* gabe notes
1:45 start reading readme 
1:47 start coding
1:52 fetch done, state logged
1:58 finished import, bots undefined.
2:06 *could not figure out map over component*, looked at old lab.
2:10 trying to figure out how to make botcard work. (last itme I converted it into a class)
2:21 made botCard work (is there an easier way to do this?)
(tea break)
2:45 start coding again? re-reading readme to figure out what to do with the army selection.
3:00 trying to pass down the handle click function, (is this even necessary?)
3:05 passed down handleclick function
3:10 still unsure on how to pull target from click.
3:15 giving up, watching old practices to see if I can figure out how you did this in the past.
3:40 Barak saves me by letting me: - 
          A. how to find the bot object from your passed down onclick. (did not know)
          B. how to use an anon function to chain together a console log. (also did not know)
          C. reminded me of how to use the spread operator to add to an array (remembered but probably would have forgotten)
3:45 got the bots to display in the army, have to make a if then to remove it from the army. (this was originally why I wanted to make a state )
4:15 quit again to discuss group project.
5:00 after many breaks, after many google searches and asking people finally got to the checkpoint.

(later that night, part 4 took around 30 minutes.)
*/
