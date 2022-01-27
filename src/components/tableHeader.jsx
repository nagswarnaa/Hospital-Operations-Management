import React, { Component } from 'react';
class TableHeader extends Component {
    state = {}
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
                {this.props.columns.map(column => <th key={column.property} scope="col" onClick={() => this.raiseSort(column.property)}>{column.label}</th>)}
            </tr>
        </thead>);
    }
}

export default TableHeader;    