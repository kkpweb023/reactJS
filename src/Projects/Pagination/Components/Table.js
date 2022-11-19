import React, { useContext } from 'react';
import './Table.css';
import Table from 'react-bootstrap/Table';
import { MyContext } from '../PaginateAPP';

const TablePro = () => {

    const Details = useContext(MyContext);
    
    return (
        <div className='Table_div'>

            <Table striped hover bordered className="table" >
                <thead className="thead">
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Details.flag ?
                            (Details.Paginate).map((value, index) =>
                                <tr key={index}>
                                    <td data-label="No.">{value.id}</td>
                                    <td data-label="Name">{value.name}</td>
                                    <td data-label="Email">{value.email}</td>
                                    <td data-label="Phone">{value.phone}</td>
                                    <td data-label="Address">{value.address}</td>
                                    <td data-label="Status">{value.status}</td>
                                </tr>
                            )
                            :
                            (Details.StatusPaginate).map((value, index) =>
                                <tr key={index}>
                                    <td data-label="No.">{value.id}</td>
                                    <td data-label="Name">{value.name}</td>
                                    <td data-label="Email">{value.email}</td>
                                    <td data-label="Phone">{value.phone}</td>
                                    <td data-label="Address">{value.address}</td>
                                    <td data-label="Status">{value.status}</td>
                                </tr>
                            )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default TablePro;