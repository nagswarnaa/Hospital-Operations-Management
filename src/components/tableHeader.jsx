import React, { Component } from 'react';
class TableHeader extends Component {


    renderSortIcon = (column) => {
        if (column.property !== this.props.sortColumn.property) return null;
        if (this.props.sortColumn.order === 'asc') return <i className='fa fa-sort-asc'></i>
        return <i className='fa fa-sort-desc'></i>
    }


    raiseSort = property => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.property === property)
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
        else {
            sortColumn.property = property
            sortColumn.order = 'asc'
        }
        this.props.onSort(sortColumn)
    }


    render() {
        return (<thead>
            <tr >
                {this.props.columns.map(column => <th className='clickable' key={column.property} scope="col" onClick={() => this.raiseSort(column.property)}>{column.label}{this.renderSortIcon(column)}</th>)}
            </tr>
        </thead>);
    }


}

export default TableHeader;    