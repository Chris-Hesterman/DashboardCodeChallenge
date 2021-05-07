import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavContainer = styled.div`
  background: sandybrown;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 80vw;
`;

export const StyledTitle = styled.h2`
  width: 20vw;
  text-align: center;
`;

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  margin: 75px 0 0 6vw;
  width: 10vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  color: blue;
  font-size: 1.5rem;
  &.hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &.active {
    color: lime;
  }
`;
