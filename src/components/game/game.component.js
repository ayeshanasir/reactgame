import React, { Component } from 'react'
import './game.styles.scss';

import Option from '../option/option.component';

class Game extends Component {
    render() {
        const optionList = [{
                name: 'rock',
                
            },
            {
                name: 'paper',
                
            },
            {
                name: 'scissors',
                
            }
        ];

        return (
            <div className="game-wrapper">
                <h3>What's your pick?</h3>
                <div className="game-div">
                    {
                        optionList.map((gameOption) => 
                        (<Option name={gameOption.name} />)
                        )
                    }
                </div>
            </div>  
        )
    }
}

export default Game;