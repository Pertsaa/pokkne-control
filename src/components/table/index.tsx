import { FC } from 'react';
import {
  Cell,
  Grid,
  GridButton,
  GridCol,
  GridHeader,
  GridLabel,
  GridWrapper,
} from './styles';

interface Column {
  label: string;
  values: string[];
  onAdd?: () => void;
}

interface Props {
  title: string;
  columns: Column[];
  onDelete?: () => void;
}

const Table: FC<Props> = ({ title, columns, onDelete }) => {
  return (
    <GridWrapper>
      <GridHeader>
        <h3>{title}</h3>
        {onDelete && <GridButton onClick={onDelete}>Delete</GridButton>}
      </GridHeader>
      <Grid>
        {columns.map(({ label, values, onAdd }) => (
          <GridCol key={label}>
            <GridLabel>
              <div>{label}</div>
              {onAdd && <GridButton onClick={onAdd}>Add</GridButton>}
            </GridLabel>
            {values.map((v) => (
              <Cell key={v}>{v}</Cell>
            ))}
          </GridCol>
        ))}
      </Grid>
    </GridWrapper>
  );
};

export default Table;
