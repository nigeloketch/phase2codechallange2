import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css';
import "semantic-ui-css/semantic.min.css"



function App() {
  const [army, setArmy] = useState([]);

  function addToArmy(bot) {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function removeFromArmy(bot) {
    const newArmy = army.filter((b) => b.id !== bot.id);
    setArmy(newArmy);
  }

  return (
    <div className="ui container">
      <h1>Bot Battlr</h1>
    <BotCollection addToArmy={addToArmy} />
    <YourBotArmy army={army} removeFromArmy={removeFromArmy} />
      
    </div>
  );
}

export default App;