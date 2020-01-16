import React from "react";


class BotCard extends React.Component {
  
  //ultra unsure what to do with props in the way it was passed down.. this trapped me for 20 minutes in the code challenge. I'm going to attempt to just convert it to a class here to match what I did the last time.
  //finished 2:21
  render(){
    // console.log(this.props.bots)
  const bot = this.props.bots;
  // console.log(this.props)

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  
    return (
      <div className="ui column">
        <div
          className="ui card"
          key={bot.id}
          onClick={()=>this.props.handleclick(bot)}
        >
          <div className="image">
            <img alt="oh no!" src={bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {bot.name} {botType}
            </div>

            <div className="meta text-wrap">
              <small>{bot.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {bot.health}
            </span>

            <span>
              <i className="icon lightning" />
              {bot.damage}
            </span>
            <span>
              <i className="icon shield" />
              {bot.armor}
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default BotCard;
