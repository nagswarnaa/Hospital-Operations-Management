import React, { Component } from 'react';
import { collection, getDocs, doc, updateDoc } from "firebase/firestore"
import Table from './table'
import Pagination from './pagination'
import { Link } from 'react-router-dom';
import { paginate } from '../utils/paginate';
import _ from 'lodash'
import { db } from '../utils/config'

class Transaction extends Component {
    columns = [
        { property: 'patientId', label: 'Patient ID' },
        { property: 'transactionId', label: 'Transaction ID' },
        { property: 'transactionAmt', label: 'Transaction Amount' },
        { property: 'updated_on', label: 'Updated On' },
        { property: 'status', label: 'Status' }
        // {
        //     property: 'complete', content:
        //         <button className='btn btn-secondary btn-sm'> Complete</ button>



        // }
    ]
    state = {
        transactions: [],
        pageSize: 9,
        currentPage: 1,
        sortColumn: { property: 'transactionId', order: 'asc' }
    }

    // handleUpdate = async (e) => {
    //     e.preventDefault()
    //     const taskDocRef = doc(db, 'transactions', id)
    //     try {
    //         await updateDoc(taskDocRef, {
    //             title: title,
    //             description: description
    //         })
    //         onClose()
    //     } catch (err) {
    //         alert(err)
    //     }
    // }


    fire_gettransactions = async (db) => {
        const transactionssCol = collection(db, 'transactions');
        const transactionsSnapshot = await getDocs(transactionssCol);
        const transactionsList = transactionsSnapshot.docs.map(doc => doc.data());

        this.setState({ transactions: transactionsList })
    }

    componentDidMount() {
        this.fire_gettransactions(db);
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page })
    }

    handleSort = (sortColumn) => {

        this.setState({ sortColumn })
    }


    render() {


        const { transactions, pageSize, currentPage, sortColumn } = this.state

        const sorted = _.orderBy(transactions, [sortColumn.property], [sortColumn.order])
        const patients_sorted = paginate(sorted, pageSize, currentPage)
        let counts = transactions && transactions.length

        if (counts === 0) return <p>No  Transactions</p>
        return (
            <React.Fragment>
                <Table columns={this.columns} sortColumn={this.state.sortColumn} data={patients_sorted} onSort={this.handleSort}></Table>
                <Pagination itemCount={counts} pageSize={this.state.pageSize} currentPage={this.state.currentPage} OnPageChange={this.handlePageChange} />
            </React.Fragment >);
    }
}

export default Transaction;