import React from 'react';
import { Spring, animated } from 'react-spring';
import styled, { keyframes } from 'styled-components';
import paths from '../data/hh';

const grow = keyframes`
  0% {
    transform: scale(0.9);
  },
  50% {
    transform: scale(1);
  },
  100% {
    transform: scale(0.1);
  }
`;

const Title = styled.div`
  color: white;
  font-family: 'Righteous';
  font-size: 147px;
  letter-spacing: 20px;
  mix-blend-mode: darken;
  text-align: right;

  @media (max-width: 600px) {
    font-size: 70px;
    mix-blend-mode: exclusion;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  width: 80%;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  flex: 1;
`;

class App extends React.Component {
  state = {
    path: 0
  };

  componentDidMount() {
    setInterval(this.next, 4000);
  }

  next = () => {
    this.setState(state => {
      const next = state.path + 1;
      return {
        path: paths.length === next ? 0 : next
      };
    });
  };

  render() {
    const selected =
      this.state.path != null ? paths[this.state.path] : { image: [] };
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>{selected.title || 'Hunted Horse'}</Title>
        </TitleWrapper>
        <svg onClick={this.next} viewBox="0 0 400 256" height="100vh">
          {selected.image.map((p, i) => (
            <Spring
              key={i}
              from={{ d: 'M91,59 116,79 26,78Z', fill: '#e1e4d8' }}
              native
              to={p}
            >
              {t => (
                <animated.path
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
