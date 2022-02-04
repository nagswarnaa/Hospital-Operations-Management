import React, { Component } from 'react';
import Table from './table'
import Pagination from './pagination'
import { paginate } from '../utils/paginate';
import { getPatients } from '../services/PrescriptionService'
import _ from 'lodash'
import { Link } from 'react-router-dom';


class PatientTable extends Component {

    state = {
        patients: getPatients(),
        pageSize: 9,
        currentPage: 2,
        sortColumn: { property: 'Patient_id', order: 'asc' },

    }

    columns = [
        { property: 'Patient_id', label: 'Patient ID' },
        { property: 'Patient_name', label: 'Patient Name' },
        { property: 'Address', label: 'Address' },
        { property: 'Dob', label: 'Date Of Birth' },
        { property: 'Phone', label: 'Phone' },
        { property: 'Sex', label: 'Sex' },
        { property: 'DOJ', label: 'Date Of Joining' },
        {
            property: 'show', content: medicine => <Link to={`/patient/${medicine.Patient_id}`}
                state={{
                    medicine
                }}
            >
                <button className='btn btn-secondary btn-sm'
                >
                    Prescription

                </button>
            </Link>
        },

    ]
    handlePageChange = (page) => {
        this.setState({ currentPage: page })
    }

    handleSort = (sortColumn) => {

        this.setState({ sortColumn })
    }



    render() {

        const { length: count } = this.state.patients
        const { patients: allpatients, pageSize, currentPage, sortColumn } = this.state
        const sorted = _.orderBy(allpatients, [sortColumn.property], [sortColumn.order])
        const patients = paginate(sorted, pageSize, currentPage)

        if (count === 0) return <p1>No Medicine is prescriped for this patient</p1>
        return (
            <React.Fragment>
                <Table columns={this.columns} sortColumn={this.state.sortColumn} data={patients} onSort={this.handleSort}></Table>
                <Pagination itemCount={count} pageSize={this.state.pageSize} currentPage={this.state.currentPage} OnPageChange={this.handlePageChange} />
            </React.Fragment >);
    }
}


export default PatientTable;