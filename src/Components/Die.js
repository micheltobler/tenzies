import React from "react";

export default function Die(props){

    const styles ={backgroundColor: props.isHeld ? 'rgb(116, 216, 116)' : 'white' }
    return(
        <div 
        className='die' 
        style={styles}
        onClick={props.holdDice}
        >
            <h2 className="die-value">{props.value}</h2>
        </div>
    )
}