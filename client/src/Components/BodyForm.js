import React, { Component } from 'react'
import FindByPersonaName from './FindByPersonaName';

export class BodyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      personaName: ''
    }
    this.updateState = this.updateState.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('BodyForm level', nextProps);
    this.updateState(nextProps.data);
  }

  updateState(newProps) {
    this.setState({
      step: 1,
      data: newProps
    });
  }

  render() {
    switch(this.state.step) {
      case 0:
        return (
          <div>
            <h1>text</h1>
          </div>
        )
      case 1:
        return (
          <div>
            <FindByPersonaName data={this.props.data} />
          </div>
        );
        default:
          return (
            <div>
              <h1>Hello from default. Probably shouldn't be here.</h1>
            </div>
          );
    }
  }
}

// BodyForm.defaultProps = {
//   step: 0
// };

export default BodyForm;
