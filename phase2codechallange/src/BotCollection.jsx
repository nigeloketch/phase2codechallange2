import React, { useState, useEffect } from "react";

function BotCollection({ addToArmy }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div className="ui segment">
      <h3 className="ui header">Bot Collection</h3>
      <div className="ui five column grid">
        {bots.map((bot) => (
          <div key={bot.id} className="column">
            <div className="ui card">
              <div className="image">
                <img src={bot.avatar_url} alt={bot.name} />
              </div>
              <div className="content">
                <div className="header">{bot.name}</div>
                <div className="meta">Bot Type: {bot.bot_class}</div>
                <div className="description">
                  <p>Health: {bot.health}</p>
                  <p>Damage: {bot.damage}</p>
                  <p>Armor: {bot.armor}</p>
                  <p>Catchphrase: {bot.catchphrase}</p>
                </div>
              </div>
              <div className="extra content">
                <button
                  className="ui green button"
                  onClick={() => addToArmy(bot)}
                >
                  Add to Army
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .ui.segment {
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .ui.five.column.grid > .column {
          margin-bottom: 20px;
        }

        .ui.card .image img {
          height: 200px;
          width: 200px;
          object-fit: cover;
        }

        .ui.card .content {
          padding: 10px;
        }

        .ui.card .description {
          padding: 10px;
        }

        .ui.card .description p {
          margin: 0;
        }

        .ui.card .extra.content {
          padding: 10px;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default BotCollection;
