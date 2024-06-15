import React, { useState } from 'react';
import NameInput from '../molecules/nameInput';
import Button from '../molecules/button';
import { faCirclePlus, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [players, setPlayers] = useState([{ id: 0, component: <NameInput key={0} id={0} onDelete={() => deletePlayer(0)} /> }]);
  const [nextId, setNextId] = useState(1);

  const addPlayer = () => {
    const newId = nextId;
    setPlayers([...players, { id: newId, component: <NameInput key={newId} id={newId} onDelete={() => deletePlayer(newId)} /> }]);
    setNextId(nextId + 1);
  };

  const deletePlayer = (idToDelete) => {
    setPlayers(players.filter(player => player.id !== idToDelete));
  };

  return (
    <div className="home-container">
      <h1 className="home-container__title">Spelers</h1>
      <main>
        <ul className="home-container__player-list">
          {players.map(player => (
            <li key={player.id}>
              {player.component}
              <Button
                variant="secondary"
                text="Verwijderen"
                icon={faCirclePlus}
                onClick={() => deletePlayer(player.id)}
              />
            </li>
          ))}
        </ul>
        <div className="home-container__button-container">
          <Button
            variant="secondary"
            text="Toevoegen"
            icon={faCirclePlus}
            onClick={addPlayer}
          />
          <Button variant="primary" text="Start het spel" icon={faCirclePlay} />
        </div>
      </main>
    </div>
  );
}

export default Home;
