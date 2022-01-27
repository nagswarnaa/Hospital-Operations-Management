import React, { Component } from 'react';
class TableBody extends Component {

    renderCell = (item, column) => {
        if (column.content) return column.content(item)

        return item[column.property]
    }


    render() {
        const { columns, data } = this.props
        return (
            <tbody>
                {data.map(item => (
                    <tr key={item.Prescription_ref}>
                        {columns.map(column => <td key={column.property}>{this.renderCell(item, column)}</td>)}
                    </tr>))}
            </tbody>);
    }
}

export default TableBody;    