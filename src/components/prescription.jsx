import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MedicineTable from './medicineTable'
import Pagination from './pagination'
import { paginate } from '../utils/paginate';
import { getMedicines } from '../services/PrescriptionService'
import { useParams } from 'react-router-dom';
import _ from 'lodash'


class Prescription extends Component {




    state = {
        medicines: getMedicines(),
        pageSize: 9,
        currentPage: 1,
        sortColumn: { property: 'Prescription_ref', order: 'asc' }
    }
    componentDidMount() {
        // this.setState({ medicines: getMedicines() })
        // console.log("hh");
    }



    handlePageChange = (page) => {
        this.setState({ currentPage: page })
    }

    handleSort = (sortColumn) => {

        this.setState({ sortColumn })
    }


    render() {
        let { id } = this.props.match.params;
        id = parseInt(id, 10)

        const { medicines: allmedicines, pageSize, currentPage, sortColumn } = this.state
        const meds = allmedicines && allmedicines.length > 0 && allmedicines.filter(item => item.Prescription_ref === id)
        const { length: count } = meds



        const sorted = _.orderBy(meds, [sortColumn.property], [sortColumn.order])
        const medicines = paginate(sorted, pageSize, currentPage)

        if (count === 0) return <p1>No Medicine is prescribed for this patient</p1>


        return (<React.Fragment>
            <p>Showing {count} prescribed medicines for the patient</p>

            <MedicineTable medicines={medicines} sortColumn={sortColumn} onSort={this.handleSort} />
            <Pagination itemCount={count} pageSize={this.state.pageSize} currentPage={this.state.currentPage} OnPageChange={this.handlePageChange} />
        </React.Fragment >
        );
    }
}

export default withRouter(Prescription);