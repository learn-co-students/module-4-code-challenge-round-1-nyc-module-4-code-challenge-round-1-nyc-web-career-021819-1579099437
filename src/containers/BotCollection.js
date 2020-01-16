import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	//   console.log (this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
			  {this.props.bots.map(buts => <BotCard bots = {buts} key = {buts.id} handleclick = {this.props.handleclick} specClick = {this.props.specClick}/>)}
			  {/* this took me around 10 minutes and longer udring the code challenge, I ended up looking up old code. */}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

//   extremely stuck point, how to map data over a compnent. had to look up old practice lab after 10 minutes. 
//   this.props.pokemon.map(mon => <PokemonCard key={mon.id} mon={mon}/>)}
