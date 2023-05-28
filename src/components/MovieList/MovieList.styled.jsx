import styled from 'styled-components';
import { Link as LinkStyled } from 'react-router-dom';
export const FilmsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
`;

export const Link = styled(LinkStyled)`
  text-decoration: none;
  color: #000000;
  &:hover {
    color: #19a7ce;
  }
`;
