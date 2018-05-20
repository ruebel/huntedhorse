import React from 'react';
import { Spring, animated } from 'react-spring';
import styled from 'styled-components';
import paths from '../data/hh';
import Title from './Title';

const Path = styled(animated.path)`
  transition: fill-opacity, transform 200ms ease-in-out;
  &:hover {
    fill-opacity: 1;
    transform: rotate(2deg);
  }
`;

const Wrapper = styled.div`
  align-items: center;
  flex: 1;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
`;

class App extends React.Component {
  state = {
    path: 0
  };

  timer = null;

  componentDidMount() {
    this.setupTimer();
  }

  next = fromClick => {
    if (fromClick) {
      this.setupTimer();
    }
    this.setState(state => {
      const next = state.path + 1;
      return {
        path: paths.length === next ? 0 : next
      };
    });
  };

  setupTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(this.next, 4000);
  };

  render() {
    const selected =
      this.state.path != null ? paths[this.state.path] : { image: [] };
    return (
      <Wrapper>
        <Title>{selected.title}</Title>
        <svg onClick={this.next} viewBox="0 0 400 256" height="100vh">
          {selected.image.map((p, i) => (
            <Spring
              key={i}
              from={{ d: 'M91,59 116,79 26,78Z', fill: '#e1e4d8' }}
              native
              to={p}
            >
              {t => (
                <Path
                  d={t.d}
                  fill={t.fill}
                  fillOpacity={t.fillOpacity || 0.501961}
                />
              )}
            </Spring>
          ))}
        </svg>
      </Wrapper>
    );
  }
}

export default App;
