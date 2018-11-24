import React, { Component } from 'react'
import FindByPersonaName from './FindByPersonaName';

export class BodyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    }
  }
  render() {
    switch(this.state.step) {
      case 1:
        return (
          <div>
            <FindByPersonaName />
          </div>
        );
        default:
          return (
            <div>
              <FindByPersonaName />
            </div>
          );
    }
  }
}

export default BodyForm
