import DataTable, {type TableColumn} from 'react-data-table-component';
import {AiOutlineSortAscending} from 'react-icons/ai';

interface Props {
	data: Components.Schemas.Pet[];
	columns: Array<TableColumn<Components.Schemas.Pet>>;
	contextActions?: React.ReactNode | React.ReactNode[];
	onSelectedRowsChange?: (selected: {allSelected: boolean; selectedCount: number; selectedRows: Components.Schemas.Pet[]}) => void;
}

export const Table = ({data, columns, contextActions, onSelectedRowsChange}: Props) => (
	<DataTable
		title="Movies"
		columns={columns}
		data={data}
		sortIcon={<AiOutlineSortAscending />}
		pagination
		selectableRows
		onSelectedRowsChange={onSelectedRowsChange}
		selectableRowsSingle
		contextActions={contextActions} />
);
