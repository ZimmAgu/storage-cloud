import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

function Breadcrumbs({ currentFolder }) {
    return (
        <Breadcrumb className="flex-grow-1">
            {currentFolder && ( 
                <Breadcrumb.Item className="text-truncate" style={{maxWidth: '10em'}} active>
                    {currentFolder.name}
                </Breadcrumb.Item>
            )}    
        </Breadcrumb>
    )
}

export default Breadcrumbs
