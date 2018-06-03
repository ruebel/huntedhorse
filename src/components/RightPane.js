import styled from 'styled-components';

export default styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  pointer-events: none;
  position: absolute;
  right: 0;
  width: 80%;

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    width: 100%;
  }
`;
