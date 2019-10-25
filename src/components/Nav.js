import React from 'react';

function Jumbotron(props) {
    return (
        <div>
            <h1 className="display-4">Flag Memory Game</h1>
            <div className="container">
                <h3>Score: {props.score}</h3>
                <h3>Top Score: {props.topScore}</h3>
                <h3>{props.message}</h3>
            </div>
        </div>
    )
}

export default Jumbotron;
