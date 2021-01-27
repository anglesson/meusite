import React from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { Container, Image, Row, Col } from 'react-bootstrap'

const PageMain = (props) => {
    let { sitename } = useParams();
    return (
        <Container fluid style={{backgroundColor: props.corDeFundo}}>
            <Row className="justify-content-md-center">
                <Col>{ props.dataPage }</Col>
                <Col>1 of 1</Col>
            </Row>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        corDeFundo: state.site.bc
    }
}

export default connect(mapStateToProps)(PageMain);