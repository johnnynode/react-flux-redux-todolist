import React, {Component} from 'react';
import { connect } from 'react-redux';
import Action from '../action';
import HeaderContainer from "../views/container/header";
import InputContainer from "../views/container/input";
import ListContainer from "../views/container/list";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <InputContainer />
        <ListContainer />
      </div>
    )
  }

  componentDidMount() {
    this.props.loadData();
  }
}

export default connect(
  undefined,
  {
      loadData: Action.loadData
  }
)(App);