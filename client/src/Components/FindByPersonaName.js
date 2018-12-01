import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';

class FindByPersonaName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      picList: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/200px-Google_%22G%22_Logo.svg.png',
        'https://i.ytimg.com/vi/tYBk4kLHPkk/maxresdefault.jpg'
      ],
      data: '',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/200px-Google_%22G%22_Logo.svg.png'
    };
    this.nextPic = this.nextPic.bind(this);
    this.prevPic = this.prevPic.bind(this);
    this.correctPic = this.correctPic.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props !== state.props) {
      console.log(props);
    }
    return props;
  }

  // componentWillReceiveProps(nextProps) {
  //   // Learn how to debug I guess
  //   console.log('PERSONA NAME LEVEL', nextProps);
  //   this.updateState(nextProps);
  // }

  updateState(newProps) {
    this.setState({
      data: newProps
    });
  }

  nextPic(e) {
    e.preventDefault();
    let i = this.state.index;
    i = i === this.state.picList.length-1 ? 0 : ++i;
    this.setState({
      index: i,
      pic: this.state.picList[i]
    });
  }

  prevPic(e) {
    e.preventDefault();
    let i = this.state.index;
    i = i === 0 ? i = this.state.picList.length-1 : --i;
    this.setState({
      index: i,
      pic: this.state.picList[i]
    })
  }

  correctPic(e) {
    e.preventDefault();
    let correctPic = this.state.pic;
    // Send entire block of info into props to be able to send
    // back the correct info to the parent component
    alert('Yay that\'s the correct picture!');
  }

  render() {
    return (
      <div style={{'margin': 100}}> {/* figure out how to make it dynamically 1/4 down the screen */}
        <img style={{'maxWidth': 500, 'height': 'auto'}} src={this.state.pic} alt="text stuff"/>
        <Container>
          <Button color="primary" onClick={this.prevPic}>Back</Button>
          <Button color="success" onClick={this.correctPic}>Correct Picture?</Button>
          <Button color="primary" onClick={this.nextPic}>Forward</Button>
        </Container>
      </div>
    );
  }
}

export default FindByPersonaName;