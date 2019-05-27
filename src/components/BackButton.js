import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BackButton extends Component {
    
  render() {
    return (
      <div className='back-button'>
        <button onClick={this.props.history.goBack}>Back</button>
      </div>
    )
  }
}

export default withRouter(BackButton);

