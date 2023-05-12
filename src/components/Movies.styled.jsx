import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const BtnSearch = styled.button`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
  color: black;
  background-color: beige;
  &:focus,
  &:hover {
    color: white;
    background-color: orangered;
  }
`;
