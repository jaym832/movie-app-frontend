import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';


export class MovieCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.poster} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>

                        <Button onClick={() => this.props.sendData(this.props.movie)} variant="primary">Save</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default MovieCard
