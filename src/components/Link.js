import styled from 'styled-components';

export default styled.div`
  color: ${p => p.theme.color.primary};
  cursor: pointer;
  font-family: ${p => p.theme.font.primary};
  font-size: 25px;
  letter-spacing: 20px;
  line-height: 60px;
  mix-blend-mode: darken;
  pointer-events: auto;
  text-align: right;
  text-decoration: underline;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    color: ${p => p.theme.color.active};
    text-decoration: line-through;
  }
`;
