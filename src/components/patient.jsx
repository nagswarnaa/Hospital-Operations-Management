import React, { Component } from 'react';
import Table from './table'
import Pagination from './pagination'
import { paginate } from '../utils/paginate';
import { getPatients } from '../services/PrescriptionService'
import _ from 'lodash'
import { Link } from 'react-router-dom';
import { collection, doc, updateDoc, getDocs } from "firebase/firestore"
import { db } from '../utils/config'



class PatientTable extends Component {

    state = {
        patients: [],
        pageSize: 9,
        currentPage: localStorage.getItem("currentPage") ? localStorage.getItem("currentPage") : 1,
        sortColumn: { property: 'patient_ref', order: 'asc' },

    }
    fire_getPatients = async (db) => {
        const patientsCol = collection(db, 'patients');


        const PatientsSnapshot = await getDocs(patientsCol);


        const PatientsList = PatientsSnapshot.docs.map(doc => doc.data());

        console.log("PatientsList", PatientsList);
        this.setState({ patients: PatientsList })

        return PatientsList;

    }
    componentDidMount() {
        let data = this.fire_getPatients(db);

        // this.setState({ patients: data })
        console.log("data patient", data)

    }


    columns = [
        { property: 'patient_ref', label: 'Patient ID' },
        { property: 'f_name', label: ' First Name' },
        { property: 'l_name', label: 'Last Name' },
        { property: 'mobile', label: 'Phone Number' },

        {
            property: 'show', content: medicine => <Link to={`/patient/${medicine.patient_ref}`}
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
        localStorage.setItem("currentPage", page);
        this.setState({ currentPage: page })
    }

    handleSort = (sortColumn) => {
        this.setState({ sortColumn })
    }



    render() {

        // const { count } = this.state.patientsx
        const { patients: allpatients, pageSize, currentPage, sortColumn } = this.state

        const sorted = _.orderBy(allpatients, [sortColumn.property], [sortColumn.order])
        const patients = paginate(sorted, pageSize, currentPage)
        let counts = allpatients && allpatients.length
        console.log("this state patients", this.state.patients);




        if (counts === 0) return <p>No Medicine is prescriped for this patient</p>
        return (
            <React.Fragment>
                <Table columns={this.columns} sortColumn={this.state.sortColumn} data={patients} onSort={this.handleSort}></Table>
                <Pagination itemCount={counts} pageSize={this.state.pageSize} currentPage={this.state.currentPage} OnPageChange={this.handlePageChange} />
            </React.Fragment >);
    }
}


export default PatientTable;