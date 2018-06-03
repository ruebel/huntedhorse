import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Track from './Track';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  letter-spacing: 2px;
  margin-left: 20px;
  width: 50%;
`;

const Playlist = ({ index, onClick, tracks }) => {
  return (
    <Wrapper>
      {tracks.map((track, i) => (
        <Track
          activeIndex={index}
          key={i}
          index={i}
          onClick={onClick}
          track={track}
        />
      ))}
    </Wrapper>
  );
};

Playlist.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  tracks: PropTypes.array
};

export default Playlist;
