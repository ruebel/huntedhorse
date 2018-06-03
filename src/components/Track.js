import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  align-self: ${p => (p.even ? 'flex-end' : 'flex-start')};
  color: ${p => (p.isActive ? p.theme.color.active : p.theme.color.primary)};
  font-family: ${p => p.theme.font.primary};
  font-size: 28px;
  letter-spacing: 4px;
  opacity: ${p => Math.max(0.2, 1 - p.off / 10)};

  &:hover {
    color: ${p => p.theme.color.active};
    opacity: 1;
    text-decoration: line-through;
  }
`;

const Track = ({ activeIndex, index, isActive, onClick, track }) => {
  return (
    <Wrapper
      even={index % 2}
      isActive={index === activeIndex}
      off={Math.abs(index - activeIndex)}
      onClick={() => onClick(index)}
    >
      {track.title}
    </Wrapper>
  );
};

Track.propTypes = {
  activeIndex: PropTypes.number,
  index: PropTypes.number,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  track: PropTypes.object
};

export default Track;
