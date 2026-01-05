import { useState } from 'react';
import '../styles/PlayerInventory.css'; // Ensure proper overlay styles
import Card from './Card'; // Component for individual cards

const PlayerInventory = ({ players, playerCards, setPlayerCards, onClose, onCardFocus }) => {
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(null); // State for the selected player index

  const handlePlayerSelect = (index) => {
    setSelectedPlayerIndex(index);
  };

  return (
    <div className="player-inventory-overlay">
      <button onClick={onClose} className="close-button">Close</button> {/* Button to close overlay */}
      <h2>Inventario</h2>

      {/* Player selection buttons */}
      <div className="player-buttons">
        {players.map((player, index) => (
          <button className="button-84" key={index} onClick={() => handlePlayerSelect(index)}>
            {player}
          </button>
        ))}
      </div>

      {/* Display the selected player's cards */}
      {selectedPlayerIndex !== null && (
        <div className="player-cards">
          {playerCards[selectedPlayerIndex]?.map((cardNumber, cardIndex) => (
            <div key={cardIndex}>
              <Card cardNumber={cardNumber} onCardFocus={onCardFocus} isDisabled={true} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayerInventory;
