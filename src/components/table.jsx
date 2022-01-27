import React, { Component } from 'react';
import TableHeader from './tableHeader'
import TableBody from './tableBody'


const Table = (props) => {

    const { columns, sortColumn, onSort, data } = props

    return (<table className="table table-striped">
        <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn}></TableHeader>
        <TableBody columns={columns} data={data} ></TableBody>
    </table>);
}

export default Table;