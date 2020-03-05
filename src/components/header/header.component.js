import React from 'react';

import './header.styles.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="display-header">
                <div className="game-name">
                    <h1>ROCK</h1>
                    <h1>PAPER</h1>
                    <h1>SCISSOR</h1>
                </div>
                
                <div className="score-name">
                    <span>
                        SCORE
                    </span>
                    <h1>
                        12 
                    </h1>
                    
                </div>
                
                
            </div>
        )
    }
}

export default Header;
