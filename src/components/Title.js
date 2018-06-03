import styled from 'styled-components';

export default styled.div`
  color: ${p => p.theme.color.primary};
  font-family: ${p => p.theme.font.primary};
  font-size: 147px;
  letter-spacing: 20px;
  mix-blend-mode: darken;
  text-align: right;

  @media (max-width: ${p => p.theme.deviceWidth.desktop}) {
    font-size: 120px;
  }

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    font-size: 50px;
    mix-blend-mode: exclusion;
  }
`;