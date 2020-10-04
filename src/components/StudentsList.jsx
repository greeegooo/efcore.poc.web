import React from "react";
import {Table} from "react-bootstrap";
import Moment from "react-moment";

const StudentsList = (props) => {
    const {students} = props;

    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Enrollment Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    students &&
                    students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstMidName}</td>
                            <td>{student.lastName}</td>
                            <td><Moment format="YYYY/MM/DD">{student.enrollmentDate}</Moment></td>
                            <td>Acciones</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default StudentsList;