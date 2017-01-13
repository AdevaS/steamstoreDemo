import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions/index';
import { Link } from 'react-router';

class GamesIndex extends Component {
  componentWillMount() {
    this.props.fetchGames();
  }

  renderGames() {
    if (!this.props.games) {
      return (
        <tr>
          <td colSpan="4">Loading...</td>
        </tr>
      );
    }

    return this.props.games.map((game) => {
      return (
        <tr key={game.id}>
          <td><img src={game.thumbImg} /></td>
          <td>
            <Link to={"games/" + game.id}>
              {game.name}
            </Link>
          </td>
          <td>{game.discount}</td>
          <td>{game.price}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table id="game-table" className="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Discount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.renderGames()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { games: state.games.all };
}

//function mapDispatchToProps(dispatch) {
//  return bindActionCreators({ fetchGames }, dispatch);
//}

// Instead of declaring the function mapDispatchToProps above and making the connection like: export default connect(null, mapDispatchToProps)(GamesIndex),
// you can use the shortcut below changing the parameter mapDispatchToProps to { fetchGames: fetchGames } or with ES6 syntax { fetchGames }.
export default connect(mapStateToProps, { fetchGames })(GamesIndex);
