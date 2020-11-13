import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import history from "../../history.js";
import {Switch, Route, Router} from "react-router-dom";
import Main from "../main/main.jsx";
import moment from 'moment'

class App extends PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/pack">
          </Route>
          <Route exact path="/tasks">
          </Route>
          <Route exact path="/shop">
          </Route>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: getCards(state),
    seasons: getSeasons(state),
    dustCount: getDustCount(state),
    tasks: getTasks(state),
    packs: getPacks(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
  setActiveSeason: (season) => dispatch(ActionCreatorCondition.setActiveSeason(season)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
