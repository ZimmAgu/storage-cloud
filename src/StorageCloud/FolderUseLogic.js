import React, {useReducer} from 'react'


function reducer () {
    
}


function FolderUseLogic (folder = null, folderId = null) {
    const [state, dispatch] = useReducer(reducer, {
        folder,
        folderId,
        childFolders: [],
        childFiles: []
    })
}

export  { FolderUseLogic }
