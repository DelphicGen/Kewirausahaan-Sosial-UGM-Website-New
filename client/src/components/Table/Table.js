import React from 'react';
import './Table.css'
import { useTable, usePagination, useSortBy } from 'react-table';
import {dateTimeFormat} from '../../functions/functions';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Table = ({columns, data, table, admin, action2}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({
          columns,
          data,
          initialState: { pageSize: 5 } 
        }, useSortBy, usePagination)

    return (
        <>
        <div className="tableContainer">
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => {
                                        return (<th {...column.getHeaderProps(column.getSortByToggleProps())} className={`column column--${column.Header}`}>
                                            {column.render('Header')}
                                            
                                            <span className={`ml-3 arrow ${column.isSorted && 'show-arrow'} ${column.isSortedDesc && 'spin-arrow'}`}>
                                                &uarr;
                                            </span>
                                        </th>)
                                    })
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
                                        return <td {...cell.getCellProps()} className={`${cell.column.Header === 'Link' && 'wraptext'}`}>{cell.column.Header === 'Tanggal' || cell.column.Header === 'Date' || cell.column.Header === 'Created' ? dateTimeFormat(cell.value) : cell.render('Cell')}</td>
                                    })
                                }
                                {
                                    !admin ? (
                                        <>
                                            <td className="text-black">
                                                <Link to={`/event?id=${row.original.id}`}>
                                                    <Button />
                                                </Link>
                                            </td>
                                            <td>
                                                <a target="_blank" rel="noopener noreferrer" href={row.original.link}>
                                                    <Button green={true} />
                                                </a>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            {table !== 'users' &&
                                                <td className="text-black">
                                                    <Link to={`/edit?table=${table}&id=${row.original.id}`}>
                                                        <Button text="Edit" />
                                                    </Link>
                                                </td>
                                            }
                                            <td>
                                                <Button text="Delete" red={true} onClick={() => action2(table, row.original.id)} />
                                            </td>
                                        </>
                                    )
                                }
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

        <div className="pagination py-8 text-center flex items-center justify-around flex-col md:flex-row">
                <div className="mb-5 md:mb-0">
                    <button className="paginationArrow text-xl font-semibold border-2 rounded-full mx-2" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                    </button>
                    <button className="paginationArrow text-xl font-semibold border-2 rounded-full mx-2" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                    </button>
                    
                    <span>
                    Page
                    </span>
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                    
                    <button className="paginationArrow text-xl font-semibold border-2 rounded-full mx-2" onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                    </button>
                    <button className="paginationArrow text-xl font-semibold border-2 rounded-full mx-2" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                    </button>
                </div>
                
                <div>
                    <span>
                    Go to page:
                    <input
                        className="bg-transparent border-b-2 pl-1 mr-5"
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                    </span>
                    <select
                        className="bg-transparent border-b-2"
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                    {[5, 10, 20, 30, 40, 50].map(pageSize => (
                        <option className="text-black" key={pageSize} value={pageSize}>
                        Show {pageSize}
                        </option>
                    ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Table
