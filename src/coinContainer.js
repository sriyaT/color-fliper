import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './coin';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', imgSrc: 'http://tinyurl.com/react-coin-tails-jpg' },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currentCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
  }
  flipCoin = () => {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currentCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0),
      };
    });
  };
  handleClick = (e) => {
    this.flipCoin();
  };
  render() {
    return (
      <div className='coinContainer'>
        <h2>Let's Flip A Coin !!!</h2>
        {this.state.currentCoin && <Coin info={this.state.currentCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          {' '}
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{' '}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
