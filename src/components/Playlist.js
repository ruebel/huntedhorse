import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Trail } from 'react-spring';

import AnimatedTrack from './AnimatedTrack';
import Track from './Track';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  letter-spacing: 2px;
  margin-left: 20px;
  width: 75%;

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    width: 100%;
  }
`;

const Playlist = ({ index, onClick, progress, tracks }) => {
  return (
    <Wrapper>
      <Trail
        config={{ friction: 20, tension: 400 }}
        from={{ opacity: 0, x: -100 }}
        native
        to={{ opacity: 1, x: 0 }}
        keys={tracks.map((track, i) => i)}
      >
        {tracks.map((track, i) => styles => (
          <AnimatedTrack {...styles}>
            <Track
              activeIndex={index}
              index={i}
              onClick={onClick}
              progress={progress}
              track={track}
            />
          </AnimatedTrack>
        ))}
      </Trail>
    </Wrapper>
  );
};

Playlist.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  progress: PropTypes.number,
  tracks: PropTypes.array
};

export default Playlist;
