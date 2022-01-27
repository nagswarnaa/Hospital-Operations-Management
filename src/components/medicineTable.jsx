import { property } from 'lodash';
import React, { Component } from 'react';
import TableHeader from './tableHeader'
import TableBody from './tableBody'

class MedicineTable extends Component {


    columns = [
        { property: 'Prescription_ref', label: 'Prescription ID' },
        { property: 'Date', label: 'Date of Issue' },
        { property: 'Patient_name', label: 'Patient Name' },
        { property: 'Doctor_Name', label: 'Doctor Name' },
        { property: 'Medication', label: 'Medication' },
        { property: 'Quantity', label: 'Dose per day' },
        { property: 'delete', content: medicine => <button className='btn btn-danger btn-sm' onClick={() => this.props.onDelete(medicine)}>Delete</button> },

    ]
    render() {
        const { medicines, onDelete, onSort, sortColumn } = this.props

        return (<table className="table table-striped">
            <TableHeader columns={this.columns} onSort={onSort} sortColumn={sortColumn}></TableHeader>
            <TableBody columns={this.columns} data={medicines} onDelete={onDelete}></TableBody>
        </table>);
    }
}


export default MedicineTable;