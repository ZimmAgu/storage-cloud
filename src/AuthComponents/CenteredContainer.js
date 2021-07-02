import React from 'react'
import { Container } from 'react-bootstrap'

function CenteredContainer( {children} ) { //Adds the centering format so the rest of the program can look more clean and concise
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
            <div className="w-100" style={{maxWidth: "25em"}}>
                {children}
            </div>
        </Container>
    )
}

export default CenteredContainer
