import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from 'components/Counter';

class CounterContainer extends Component {
  state = {};
  render() {
    return (
      <Counter
        number={this.props.number}
        onIncrementAsync={this.props.onIncrementAsync}
        onDecrementAsync={this.props.onDecrementAsync}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.counter.number,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementAsync: () => dispatch({ type: 'INCREMENT_ASYNC' }),
    onDecrementAsync: () => dispatch({ type: 'DECREMENT_ASYNC' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
