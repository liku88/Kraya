import React from 'react'
import { Alert } from 'react-bootstrap'
const ErrorMessage = ({ variant, children }) => {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

ErrorMessage.defaultProps = {
    variant: 'info',
}

export default ErrorMessage
