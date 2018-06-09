import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';

const AnimatedTrack = ({ children, opacity, x }) => (
  <animated.div
    style={{
      opacity,
      transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
    }}
  >
    {children}
  </animated.div>
);

AnimatedTrack.propTypes = {
  children: PropTypes.node,
  opacity: PropTypes.object,
  x: PropTypes.object
};

export default AnimatedTrack;
