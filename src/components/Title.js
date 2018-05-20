import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.div`
  color: white;
  font-family: 'Righteous';
  font-size: 147px;
  letter-spacing: 20px;
  mix-blend-mode: darken;
  text-align: right;

  @media (max-width: 600px) {
    font-size: 50px;
    mix-blend-mode: exclusion;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  position: absolute;
  right: 0;
  width: 80%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

class Title extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Text>{this.props.children || 'Hunted Horse'}</Text>
      </Wrapper>
    );
  }
}

Title.propTypes = {
  children: PropTypes.node
};

export default Title;
