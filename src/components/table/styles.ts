import styled from 'styled-components';

export const TableWrapper = styled.div`
  color: white;
  margin-top: 2em;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  border-radius: 6px 6px 0 0;
  border: 1px solid #555;
  border-bottom: none;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
`;

export const TH = styled.th`
  padding: 1em 1em;
  text-align: left;
  border: 1px solid #555;
`;

export const TableBody = styled.tbody`
  border: 1px solid #555;
  border-radius: 6px;
`;

export const TR = styled.tr`
  &:last-of-type {
    border-radius: 0 0 6px 6px;
  }
`;

export const TD = styled.td`
  padding: 0.5em 0;
  text-align: center;
  border: 1px solid #555;
`;
