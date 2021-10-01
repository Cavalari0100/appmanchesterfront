import React, { useEffect } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function LoginEnfermeiro(props) {
    const JoinPage = () => {
        props.history.push("/register-enfermeiro")
    }
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Login</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Login</Button>
                    <hr></hr>
                    <Button className="teste" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={ JoinPage}>Register</Button>
                </CardBody>

            </Card>
        </div>
    )
}
export default LoginEnfermeiro;