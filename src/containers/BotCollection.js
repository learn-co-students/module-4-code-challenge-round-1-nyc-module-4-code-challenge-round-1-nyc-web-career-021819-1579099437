import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";


class BotCollection extends React.Component {

  state = {
    showView: false,
    clickedBot: {}
  }

  flipShowView = clickedBot => {
    this.setState({
      showView: !this.state.showView,
      clickedBot: clickedBot
    })
  }

  showSpecs = clickedBot => {
    <BotSpecs bot={this.props.bots.filter(bot => bot === clickedBot )} />
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.state.showView ? this.showSpecs(this.state.clickedBot) : this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} addBot={this.props.addBot} showSpecs={this.showSpecs} flipShowView={this.flipShowView} />)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
