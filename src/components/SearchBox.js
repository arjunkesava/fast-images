import React from 'react'
import { 
    Grid,
    Row,
    Col,
    ControlLabel,
    FormControl,
    Button
 } from 'react-bootstrap'

export class SearchBox extends React.Component{
    render(){
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <ControlLabel>Enter your query bro</ControlLabel>
                        <FormControl type="text" value="yo"/>
                    </Col>
                    <Col xs={6} md={4}>
                        <ControlLabel>Click</ControlLabel><br/>
                        <Button bsStyle="primary">Search</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}