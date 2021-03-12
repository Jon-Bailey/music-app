import React from 'react';

const Card = () => {
    return(
    <div className="cardWrapper">
     <div className="card">
        <div className="cardImage">
            <img src="https://images.unsplash.com/photo-1615114814213-a245ffc79e9a?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="album-artwork" />
        </div>
        <div className="cardText">
            <h3>Liked Songs</h3>
            <p></p>
        </div>
     </div>
  </div>
  )
}

export default Card;