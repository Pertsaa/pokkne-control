import { FC } from 'react';
import {
  StyledTable,
  TableBody,
  TableHeader,
  TableWrapper,
  TH,
  TR,
  TD,
} from './styles';

interface Props {
  title: string;
  headers: string[];
  cols: string[][];
}

const getTableRows = (cols: string[][]) => {
  const rowCount = Math.max(...cols.map((col) => col.length));
  const rows: number[] = [];
  for (let i = 0; i < rowCount; i++) {
    rows.push(i);
  }

  return (
    <>
      {rows.map((row) => (
        <TR key={row}>
          {cols.map((col, i) => {
            const rowSpan =
              col.length === 0 ? rowCount : Math.floor(rowCount / col.length);

            if (row % rowSpan !== 0 || row > rowSpan * col.length) return null;

            if (row === rowSpan * col.length) {
              return <TD key={`${row}:${i}`} rowSpan={rowCount - row} />;
            }
            const id = row === 0 ? 0 : Math.floor(row / rowSpan);
            const value = col[id];
            return (
              <TD key={`${row}:${i}`} rowSpan={rowSpan}>
                {value}
              </TD>
            );
          })}
        </TR>
      ))}
    </>
  );
};

const Table: FC<Props> = ({ title, headers, cols }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <h3>{title}</h3>
      </TableHeader>
      <StyledTable>
        <thead>
          <TR>
            {headers.map((header, i) => (
              <TH key={`${i}:${header}`}>{header}</TH>
            ))}
          </TR>
        </thead>
        <TableBody>{getTableRows(cols)}</TableBody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
