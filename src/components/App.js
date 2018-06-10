import React from 'react';
import styled from 'styled-components';
import slides from '../data';

import Info from './Info';
import Player from './Player';
import Svg from './Svg';

const Wrapper = styled.div`
  align-items: center;
  flex: 1;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
`;

const clientId = 'ca1f6b04464964bb9ed82eaa129f5cc7';
const slideIntervalMs = 4000;

class App extends React.Component {
  state = {
    index: 0,
    showPlayer: false
  };

  timer = null;

  componentDidMount() {
    this.setupTimer();
  }

  handleCtaClick = () => {
    // Toggle player
    this.setState(
      state => ({
        showPlayer: !state.showPlayer
      }),
      () => {
        if (this.state.showPlayer) {
          // Stop the slides from rotating when showing player
          this.stopTimer();
        } else {
          // Resume timer after closing the player (wait 1 second before next)
          setTimeout(() => this.next(true), 1000);
        }
      }
    );
  };

  next = resetTimer => {
    if (resetTimer) {
      this.setupTimer();
    }
    this.setState(state => {
      // Go to next (or loop back around to 0 if at the end)
      const next = state.index + 1;
      return {
        index: slides.length === next ? 0 : next
      };
    });
  };

  setupTimer = () => {
    this.stopTimer();
    this.timer = setInterval(this.next, slideIntervalMs);
  };

  stopTimer = () => {
    if (this.timer) {
      // Stop the timer
      clearInterval(this.timer);
      // Clear the ref to the timer
      this.timer = null;
    }
  };

  render() {
    const { index, progress, showPlayer } = this.state;
    // get the current slide
    const currentSlide = slides[index];
    return (
      <Wrapper>
        <Svg
          onClick={this.next}
          path={currentSlide.image}
          progress={progress}
        />
        <Info
          cta={currentSlide.cta}
          onCtaClick={this.handleCtaClick}
          playing={showPlayer}
          title={currentSlide.title}
        />
        {showPlayer && (
          <Player
            clientId={clientId}
            onClose={this.handleCtaClick}
            resolveUrl={currentSlide.uri}
          />
        )}
      </Wrapper>
    );
  }
}

export default App;
