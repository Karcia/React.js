import React, {Component} from 'react';
import Checklist from './CheckList';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card_title">{this.props.title}</div>
        <div className="card-details">{this.props.description}
          <Checklist cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      </div>
    );
  }
}

export default Card;