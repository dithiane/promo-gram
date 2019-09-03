import React from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { helloWorld } from '../../../redux/actions/helloActions';

class Home extends React.PureComponent {

  constructor(props) {
    super(props);

    let state = {};
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={this.props.helloWorld}>Test HelloWorld Function</button>
        {this.props.greeting && (
          <p>{this.props.greeting}</p>
        )}
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    greeting: store.hello.greeting
  }
}

function mapDispatchToProps(dispatch) {
  return {
    helloWorld: () => dispatch(helloWorld())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);