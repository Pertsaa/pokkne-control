import { FC } from 'react';
import {
  TableButton,
  Cell,
  Table,
  TableColumn,
  TableContent,
  TableHeader,
  Value,
} from './styles';

interface Column {
  label: string;
  values: string[];
  onEdit?: () => void;
  onCellDelete?: (v: string) => void;
}

interface FlexTableProps {
  title: string;
  columns: Column[];
  onDelete?: () => void;
}

interface FlexTableColumnProps {
  col: Column;
}

const FlexTableColumn: FC<FlexTableColumnProps> = ({ col }) => {
  const { label, values, onEdit, onCellDelete } = col;
  return (
    <TableColumn key={label}>
      <Cell header>
        <div>{label}</div>
        {onEdit && <TableButton onClick={onEdit}>Add</TableButton>}
      </Cell>

      {values.map((v) => (
        <Cell key={v}>
          <Value>{v}</Value>
          {onCellDelete && (
            <TableButton onClick={() => onCellDelete(v)}>-</TableButton>
          )}
        </Cell>
      ))}
    </TableColumn>
  );
};

const FlexTable: FC<FlexTableProps> = ({ title, columns, onDelete }) => {
  return (
    <Table>
      <TableHeader>
        <h3>{title}</h3>
        {onDelete && <TableButton onClick={onDelete}>Delete</TableButton>}
      </TableHeader>

      <TableContent>
        {columns.map((col) => (
          <FlexTableColumn key={col.label} col={col} />
        ))}
      </TableContent>
    </Table>
  );
};

export default FlexTable;
