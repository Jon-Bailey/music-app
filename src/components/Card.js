import React from 'react';
import {ReactComponent as PlayIcon} from '../images/play-icon.svg';

const Card = () => {
    return(
    <div className="cardWrapper">
     <div className="card">
        <div className="cardImage">
        <span className="playButton">
                <PlayIcon className="playIcon" />
            </span>
            <img src="https://images.unsplash.com/photo-1615114814213-a245ffc79e9a?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="album-artwork" />
        </div>
        <div className="cardText">
            <h3>Liked Songs</h3>
            <p>A playlist of your favorite songs</p>
        </div>
     </div>
  </div>
  )
}

export default Card;