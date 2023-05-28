import { styled } from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 4px;
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 4px;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 4px;
  background-color: #19a7ce;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    color: white;
  }
`;
