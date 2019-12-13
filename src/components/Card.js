import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  onDelete = () => {

  }

  render() {

    return (
      <div className="card">
        <div className="card__content">
          <span className="card__content-text">{this.props.text}</span>
          <span className="card__content-emoji">{this.props.emoji ? emoji.getUnicode(this.props.emoji) : ""}</span>
          <button className="card__delete" onClick={ this.onDelete }>Delete</button>
        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
