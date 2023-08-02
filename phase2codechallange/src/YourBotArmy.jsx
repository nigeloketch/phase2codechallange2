import React from "react";

function YourBotArmy({ army, removeFromArmy }) {
  return (
    <div className="ui segment">
      <h3>Your Bot Army</h3>
      {army.length > 0 ? (
        <div className="ui five column grid">
          {army.map((bot) => (
            <div key={bot.id} className="column">
              <div className="ui card">
                <div className="content">
                  <img className="ui small image" src={bot.avatar_url} alt={bot.name} />
                  <div className="header">{bot.name}</div>
                  <div className="meta">Bot Type: {bot.bot_class}</div>
                </div>
                <div className="extra content">
                  <button
                    className="ui red button"
                    onClick={() => removeFromArmy(bot)}
                  >
                    Remove from Army
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your army is empty. Add some bots!</p>
      )}
    </div>
  );
}

export default YourBotArmy;
