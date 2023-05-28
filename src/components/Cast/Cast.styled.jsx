import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const CastListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  text-align: center;
  text-decoration: none;
  list-style: none;

  img {
    object-fit: cover;
    object-position: center center;
    transform: scale(1);
    transition: transform 250ms linear 0s;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const Actor = styled.span`
  font-weight: 700;
`;
