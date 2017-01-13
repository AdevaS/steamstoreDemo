import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGame } from '../actions/index';

class GamesShow extends Component {
  componentWillMount() {
    this.props.fetchGame(this.props.params.id);
  }

  render() {
    if (!this.props.game) {
      return <div>Loading...</div>
    }

    return <div>Game Details {this.props.game.steamAppid}</div>
  }
}

function mapStateToProps(state) {
  return { game: state.games.game };
}

export default connect(mapStateToProps, { fetchGame })(GamesShow);
