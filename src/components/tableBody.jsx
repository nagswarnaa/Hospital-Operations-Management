import React, { Component } from 'react';
class TableBody extends Component {

    render() {
        const { columns, data, onDelete, } = this.props
        return (<tbody>
            {data.map(item => (<tr >
                {columns.map(column => <td>{item[column.property]}</td>)}
            </tr>))}


        </tbody>);
    }
}

export default TableBody;    