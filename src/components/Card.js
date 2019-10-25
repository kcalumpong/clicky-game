import React from "react";


function Card(props) {
    return (
        <div>
            <div class="container">
                    <h1>{props.id}</h1>
                    <img alt={props.name} src={props.img} onClick={() => props.clickedCard(props.id)} className="images" />
                    </div>
                </div>
                );
              }
              
              export default Card;
