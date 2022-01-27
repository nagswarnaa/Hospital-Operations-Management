import React, { Component } from 'react';
import Table from './table'


class MedicineTable extends Component {


    columns = [
        { property: 'Prescription_ref', label: 'Prescription ID' },
        { property: 'Date', label: 'Date of Issue' },
        { property: 'Patient_name', label: 'Patient Name' },
        { property: 'Doctor_Name', label: 'Doctor Name' },
        { property: 'Medication', label: 'Medication' },
        { property: 'Quantity', label: 'Dose per day' },
        {
            property: 'delete', content: medicine => <button className='btn btn-danger btn-sm'
                onClick={() => this.props.onDelete(medicine)}>
                Delete
            </button>
        },

    ]


    render() {
        const { medicines, onSort, sortColumn } = this.props

        return (<Table columns={this.columns} sortColumn={sortColumn} data={medicines} onSort={onSort}></Table>);
    }
}


export default MedicineTable;