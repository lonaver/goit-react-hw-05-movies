import styled from 'styled-components';

export const WrapperCasts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ThumbImg = styled.div`
  width: 160px;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
