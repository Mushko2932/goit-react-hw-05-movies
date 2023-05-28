import styled from 'styled-components';
import { Link as LinkStyled } from 'react-router-dom';

export const FilmsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
`;

export const Link = styled(LinkStyled)`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  text-align: center;
  text-decoration: none;

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    transform: scale(1);
    transition: transform 250ms linear 0s;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const MovieTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  &:hover {
    color: #19a7ce;
  }
`;
