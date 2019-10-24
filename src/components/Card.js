import React from "react";


function Card(props) {
    return (
        <div>
            <div className="flag-container">
                <div className="flags">
                    <img alt={props.name} src={props.img} onClick={() => props.clickedCard(props.id)} className="images" />
                </div>
            </div>
        </div>
    );
}

export default Card;
