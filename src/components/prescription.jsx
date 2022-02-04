import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MedicineTable from './medicineTable'
import Pagination from './pagination'
import { paginate } from '../utils/paginate';
import { getMedicines } from '../services/PrescriptionService'
import _ from 'lodash'


class Prescription extends Component {

    constructor() {
        super();

    }


    state = {
        medicines: getMedicines(),
        pageSize: 9,
        currentPage: 2,
        sortColumn: { property: 'Prescription_ref', order: 'asc' }
    }

    handleDelete = (medicine) => {
        const medicines = this.state.medicines.filter(m => m.Prescription_ref !== medicine.Prescription_ref)
        this.setState({ medicines })
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page })
    }

    handleSort = (sortColumn) => {

        this.setState({ sortColumn })
    }


    render() {

        console.log(this.props.match.params.id)
        const { length: count } = this.state.medicines
        const { medicines: allmedicines, pageSize, currentPage, sortColumn } = this.state


        const sorted = _.orderBy(allmedicines, [sortColumn.property], [sortColumn.order])
        const medicines = paginate(sorted, pageSize, currentPage)

        if (count === 0) return <p1>No Medicine is prescriped for this patient</p1>


        return (<React.Fragment>
            <p>Showing {count} prescribed medicines for the patient</p>

            <MedicineTable medicines={medicines} sortColumn={sortColumn} onDelete={this.handleDelete} onSort={this.handleSort} />
            <Pagination itemCount={count} pageSize={this.state.pageSize} currentPage={this.state.currentPage} OnPageChange={this.handlePageChange} />
        </React.Fragment >
        );
    }
}

export default withRouter(Prescription);