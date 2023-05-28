import { styled } from 'styled-components';
import { NavLink as NavLinkStyled, Link as LinkStyled } from 'react-router-dom';

export const Link = styled(LinkStyled)`
  display: inline-block;
  margin-bottom: 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  &:hover {
    color: #19a7ce;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  font-weight: 500;
`;

export const AdditonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdditionalList = styled.ul`
  list-style: none;
  display: flex;
  gap: 60px;
  margin-bottom: 20px;
`;

export const AdditionalListItem = styled.li`
  text-decoration: none;
`;

export const NavLink = styled(NavLinkStyled)`
  padding: 10px;
  color: #000000;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;

  &.active {
    color: #19a7ce;
  }
`;
