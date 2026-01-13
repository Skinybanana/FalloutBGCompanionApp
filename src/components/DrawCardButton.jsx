import React from 'react';
import '../styles/DrawCardButton.css'; // Import your CSS

const DrawCardButton = ({ type, onClick, disabled = false }) => {
    const buttonImages = {
        encounter: require('../images/misc_assets/encounter.png'), // Update with your image path
        settlement: require('../images/misc_assets/settlement.png'),
        vault7: require('../images/misc_assets/vault_007.png'),
        vault44: require('../images/misc_assets/vault_044.png'),
        vault84: require('../images/misc_assets/vault_84.png'),
        vault109: require('../images/misc_assets/vault_109.png'),
        specialStar: require('../images/misc_assets/specialStar.png'),
        specialShield: require('../images/misc_assets/specialShield.png'),
        //activation: require('')
    };

    return (
        <img
            src={buttonImages[type]}
            alt={`${type} button`} // Descriptive alt text
            className={`draw-card-button${disabled ? ' disabled' : ''}`}
            style={{padding: '10px'}}
            onClick={disabled ? undefined : onClick} // Handle click events
        />
    );
};

export default DrawCardButton;
