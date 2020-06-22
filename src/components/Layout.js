import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import "./Layout.css";

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
        <footer>
          <ul>
            <li>
              copyright 2020
              </li>         
          <li>
            Contact information:{" "}
            <a href="mailto:karanam@iiasa.ac.at">
              karanam@iiasa.ac.at
            </a>
          </li>
          </ul>
        </footer>
      </div>
    );
  }
}
