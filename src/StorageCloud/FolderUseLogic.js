import React, { useEffect, useReducer } from 'react'


const COMMAND = {
    SELECTFOLDER: 'SelectFolder'
}


function reducer () {
    
}


function FolderUseLogic (folder = null, folderId = null) {
    const [state, dispatch] = useReducer(reducer, {
        folder,
        folderId,
        childFolders: [],
        childFiles: []
    })

    useEffect (() => { 
        dispatch({ 
            type: COMMAND.SELECTFOLDER,     
            payload: { folder,  folderId}   
        })
    }, [folder, folderId]) // Runs any times the folder id or the folder changes, the initial states of the folder will be reset

}

export  { FolderUseLogic }
