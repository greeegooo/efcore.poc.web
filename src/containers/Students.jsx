import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import StudentsList from "../components/StudentsList";
import API from "../services/API";

class Students extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          students: [],
        };
    }

    async componentDidMount() {
        let students = await API.get('students');
        this.setState((prevState) => ({
            ...prevState,
            students: students,
        }));
    }

    render() {
        const {students} = this.state;

        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Students</h1>
                        <StudentsList students={students} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Students;