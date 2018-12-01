import React, { Component } from 'react';
import { 
  Navbar, 
  // Container,
  Button,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';
// const getPlayerByName = require('../requests/requestMethods');

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      personaName: ''
    };
    this.toggle = this.toggle.bind(this);
    this.callFunction = this.callFunction.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // let res = getPlayerByName(this.state.personaName);
    let res = this.state.personaName;
    console.log('navbar level', res);
    this.props.sendData(res);
  }

  onChange(e) {
    e.preventDefault();
    alert(e.target.value);
  }

  updateInput(e) {
    e.preventDefault();
    this.setState({
      personaName: e.target.value
    });
  }

  callFunction() {
    alert('Hit the function');
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="#">Dota Stats App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <InputGroup>
                <Input onChange={this.updateInput} type="text" placeholder="Persona Name" />
                <InputGroupAddon addonType="append">
                  <Button outline color="primary" onClick={this.onSubmit}>Submit</Button>
                </InputGroupAddon>
              </InputGroup>
            </Nav>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  GET
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <div onClick={this.callFunction}> {/* This is where you can call the API with axios */}
                      Get Players Heros By ID
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    Get Players Matches By ID
                  </DropdownItem>
                  {/* <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/jantzeca">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;