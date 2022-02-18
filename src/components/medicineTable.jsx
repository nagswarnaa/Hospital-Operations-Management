import React, { Component } from 'react';
import Table from './table'


class MedicineTable extends Component {


    columns = [
        { property: 'patientId', label: 'Patinet ID' },
        { property: 'date_of_issue', label: 'Date of Issue' },
        { property: 'medicine', label: 'Medication Name' },
        { property: 'dose', label: 'Dose per day' },


    ]


    render() {
        const { medicines, onSort, sortColumn } = this.props

        return (<Table columns={this.columns} sortColumn={sortColumn} data={medicines} onSort={onSort}></Table>);
    }
}


export default MedicineTable;