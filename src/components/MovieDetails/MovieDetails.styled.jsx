import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const WrapperMain = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const MainTitle = styled.h1`
  padding: 0;
  margin: 0;
`;

export const WrapperDetailsText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  display: block;
  padding: 0;
  margin: 0;
  max-width: 100%;
  height: 260px;
`;
//  width: 360px;
export const WrapperGenres = styled.ul`
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListAdditional = styled.ul`
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const StyledLink = styled(Link)`
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 400;
  color: black;
  background-color: beige;
  border: 1px solid rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    color: white;
    background-color: orangered;
  }
`;
