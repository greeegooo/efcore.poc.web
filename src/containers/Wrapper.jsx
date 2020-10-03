import React from "react";
import {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";

class Wrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;

        return (
            <Fragment>
                <Menu />
                <Container>
                    <Row>
                        <Col>
                            {children}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Wrapper;