import React from 'react';
import styled from 'styled-components';
import slides from '../data/hh';

import Info from './Info';
import Player from './Player';
import Svg from './Svg';

const Wrapper = styled.div`
  align-items: center;
  flex: 1;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
`;

const clientId = 'ca1f6b04464964bb9ed82eaa129f5cc7';

class App extends React.Component {
  state = {
    index: 4,
    showPlayer: false
  };

  timer = null;

  componentDidMount() {
    this.setupTimer();
  }

  handleCtaClick = () => {
    this.setState(
      state => ({
        showPlayer: !state.showPlayer
      }),
      () => {
        if (this.state.showPlayer) {
          this.stopTimer();
        } else {
          setTimeout(() => this.next(true), 1000);
        }
      }
    );
  };

  next = fromClick => {
    if (fromClick) {
      this.setupTimer();
    }
    this.setState(state => {
      const next = state.index + 1;
      return {
        index: slides.length === next ? 0 : next
      };
    });
  };

  setupTimer = () => {
    this.stopTimer();
    this.timer = setInterval(this.next, 4000);
  };

  stopTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
  };

  render() {
    const { index, progress, showPlayer } = this.state;
    const selected = slides[index];
    return (
      <Wrapper>
        <Info
          cta={selected.cta}
          onCtaClick={this.handleCtaClick}
          playing={showPlayer}
          title={selected.title}
        />
        {showPlayer && (
          <Player
            clientId={clientId}
            onClose={this.handleCtaClick}
            resolveUrl={selected.uri}
          />
        )}
        <Svg onClick={this.next} path={selected.image} progress={progress} />
      </Wrapper>
    );
  }
}

export default App;
