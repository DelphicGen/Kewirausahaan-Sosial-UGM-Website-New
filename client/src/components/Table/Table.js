import React from 'react';
import './Table.css'
import { useTable, usePagination, useSortBy } from 'react-table';
import {dateTimeFormat} from '../../functions/functions';
import Button from '../Button/Button';

const Table = ({columns, data}) => {;
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex},
    } = useTable({
          columns,
          data,
        }, useSortBy, usePagination)

    return (
        <table {...getTableProps()} className="mt-5">
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        
                                        <span className={`ml-3 arrow ${column.isSorted && 'show-arrow'} ${column.isSortedDesc && 'spin-arrow'}`}>
                                            &uarr;
                                        </span>
                                    </th>
                                ))
                            }
                            <th></th>
                            <th></th>
                        </tr>
                    ))
                }
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return (
                          <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    console.log(cell)
                                    return <td {...cell.getCellProps()}>{cell.column.Header === 'Tanggal' ? dateTimeFormat(cell.value) : cell.render('Cell')}</td>
                                })
                            }
                            <td className="text-black">
                                <Button />
                            </td>
                            <td>
                                <Button register={true} />
                            </td>
                          </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table
