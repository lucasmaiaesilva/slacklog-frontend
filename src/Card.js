import React from 'react';
import './Card.css';

const Card = () => (
  <section className="card">
    <div className="card-header">
      <span>team join</span>
      <span>03 may 2017</span>
    </div>

    <div className="card-content primary">
      <div className="user">
        <img src="https://secure.gravatar.com/avatar/56779145d46784a68f71cbcce7899313.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0002-72.png" />
        <div className="user-data">
          <div className="name">
            John Doe
          </div>

          <div className="from">
            EUA - NY
          </div>
        </div>
      </div>
      <span class="ext-info">not admin</span>
    </div>
  </section>
);

export default Card;
