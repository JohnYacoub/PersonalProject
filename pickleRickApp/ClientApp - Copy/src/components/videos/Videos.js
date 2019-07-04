import React, {Component} from 'react';

class Videos extends Component {
  render () {
    return (
      <div className="flex items-center">
        <iframe
          src="https://giphy.com/embed/l41JMXnXn4E7WQR8s"
          width="480"
          height="270"
          frameBorder="0"
          className="giphy-embed flex items-center"
          allowFullScreen
          title="logs"
        />
      </div>
    );
  }
}

export default Videos;
