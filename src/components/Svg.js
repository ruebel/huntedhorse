import React from 'react';
import PropTypes from 'prop-types';
import { Spring, animated } from 'react-spring';
import styled from 'styled-components';

const Path = styled(animated.path)`
  transition: fill-opacity, transform 200ms ease-in-out;
  &:hover {
    fill-opacity: 1;
    transform: rotate(2deg);
  }
`;

const Wrapper = styled.svg`
  height: 100vh;
`;

class Svg extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    path: PropTypes.array
  };

  static defaultProps = {
    path: []
  };

  render() {
    const { onClick, path } = this.props;

    return (
      <Wrapper onClick={onClick} viewBox="0 0 400 256" height="100vh">
        {path.map((p, i) => (
          <Spring
            config={{ friction: 18, tension: 30 }}
            delay={2000}
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
      </Wrapper>
    );
  }
}

export default Svg;
