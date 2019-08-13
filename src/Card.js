import React from 'react';
import Moment from 'react-moment';
import './Card.css';

const Card = ({
  eventName,
  updated,
  name,
  tzLabel,
  isAdmin,
  avatarImage,
}) => (
  <section className="card">
    <div className="card-header">
      <span>{ eventName }</span>
      <span>
        <Moment format="MM/DD/YYYY">
          {updated} 
        </Moment>
      </span>
    </div>

    <div
      className={`card-content ${eventName === 'user_change' ? 'secondary' : 'primary'}`}
    >
      <div className="user">
        <img src={avatarImage} alt="avatar" />
        <div className="user-data">
          <div className="name">
            { name }
          </div>

          <div className="from">
            { tzLabel }
          </div>
        </div>
      </div>
      <span className="ext-info">
        {isAdmin ? 'admin' : 'not admin'} 
      </span>
    </div>
  </section>
);

export default Card;
