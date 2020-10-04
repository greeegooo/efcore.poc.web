import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Menu from "../components/Menu/Menu";

class Wrapper extends React.Component {

    render() {
        const {children} = this.props;

        return (
            <div>
                <Menu />
                <Container>
                    <Row>
                        <Col>
                            {children}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Wrapper;