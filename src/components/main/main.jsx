import React, {PureComponent} from "react";
import {connect} from "react-redux";

class Main extends PureComponent {

  constructor(props) {
    super();

  }

  render() {
    return <React.Fragment>

    </React.Fragment>
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);