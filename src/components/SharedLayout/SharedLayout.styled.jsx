import { styled } from 'styled-components';
import { Link as LinkStyled } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #f9f5f6;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavList = styled.ul`
  margin: 0;
  display: flex;
  gap: 60px;
  list-style: none;
`;

export const Link = styled(LinkStyled)`
  padding: 10px;
  color: #000000;
  text-decoration: none;
  border-radius: 4px;
  font-size: 24px;
  font-weight: bold;

  &.active {
    color: #19a7ce;
  }
`;

export const Main = styled.main`
  padding-top: 20px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 20px;
`;
