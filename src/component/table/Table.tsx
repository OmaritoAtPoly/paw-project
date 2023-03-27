import DataTable, {type TableColumn} from 'react-data-table-component';
import {AiOutlineSortAscending} from 'react-icons/ai';

interface Props {
	data: Components.Schemas.Pet[];
	columns: Array<TableColumn<Components.Schemas.Pet>>;
	contextActions?: React.ReactNode | React.ReactNode[];
	onSelectedRowsChange?: (selected: {allSelected: boolean; selectedCount: number; selectedRows: Components.Schemas.Pet[]}) => void;
	authenticated?: boolean;
	title?: string;
	selectableRowsSingle?: boolean;
}

export const Table = ({data, columns, contextActions, onSelectedRowsChange, title = '', authenticated, selectableRowsSingle = false}: Props) => (
	<DataTable
		title={title}
		columns={columns}
		data={data}
		sortIcon={<AiOutlineSortAscending />}
		pagination
		selectableRows
		onSelectedRowsChange={onSelectedRowsChange}
		selectableRowsSingle={selectableRowsSingle}
		contextActions={authenticated ? contextActions : undefined} />
);
