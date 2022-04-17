import styled from 'styled-components';

export const Value = styled.div`
  word-break: break-all;
`;

export const Table = styled.div`
  border-radius: 6px;
  margin: 2rem 0;
  color: white;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: #2a2a2a;
  padding: 1em;

  border: 1px solid #555;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const TableContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TableColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #555;
  border-right: 1px solid #555;
`;

export const TableLabels = styled.div`
  display: flex;
`;

interface CellProps {
  header?: boolean;
}

export const Cell = styled.div<CellProps>`
  flex: ${({ header }) => (header ? 0 : 1)};
  background-color: ${({ header }) => (header ? '#282828' : 1)};
  padding: 1em;
  border-bottom: 1px solid #555;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-weight: normal;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  margin-left: 1em;
`;
