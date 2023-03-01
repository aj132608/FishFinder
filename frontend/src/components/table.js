import React, { useMemo } from "react";
import { useTable } from "react-table";

const columns = [
    {
        Header: "Name",
        accessor: "NAME"
    },
    {
        Header: "Location",
        accessor: "LOCATION"
    },
    {
        Header: "Time",
        accessor: "TIME"
    },
    {
        Header: "Description",
        accessor: "DESCRIPTION"
    }
];

function Table({fishData}) {

    const data = useMemo(() => fishData, [fishData]);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data});
    


    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue', margin: '20px' }}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th
                        {...column.getHeaderProps()}
                        style={{
                        borderBottom: 'solid 3px red',
                        background: 'aliceblue',
                        color: 'black',
                        fontWeight: 'bold',
                        }}
                    >
                        {column.render('Header')}
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return (
                        <td
                            {...cell.getCellProps()}
                            style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                            background: 'papayawhip',
                            color: 'black'
                            }}
                        >
                            {cell.render('Cell')}
                        </td>
                        )
                    })}
                    </tr>
                )
                })}
            </tbody>
        </table>
    );
}
export default Table;