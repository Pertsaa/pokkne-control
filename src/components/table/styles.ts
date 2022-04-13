import styled from 'styled-components';

export const GridWrapper = styled.div`
  color: white;
  border: 1px solid #555;
  border-radius: 6px;
  margin: 2em 0;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GridHeader = styled.div`
  position: relative;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #252525;
  border-radius: 6px 6px 0 0;
  border-bottom: 1px solid #555;
`;

export const GridCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    border-left: 1px solid #555;
  }
`;

export const GridLabel = styled.div`
  position: relative;
  padding: 1em;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  :not(:only-child) {
    border-bottom: 1px solid #555;
  }
`;

export const Cell = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;

  &:not(:last-child) {
    border-bottom: 1px solid #555;
  }
`;

export const GridButton = styled.a`
  font-weight: normal;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  position: absolute;
  right: 1em;
`;
