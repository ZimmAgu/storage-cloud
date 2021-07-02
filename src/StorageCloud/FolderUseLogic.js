import React, { useEffect, useReducer } from 'react'


const ACTION = {
    SELECTFOLDER: 'SelectFolder'
}


function reducer (state, { type, payload }) {
    switch (type) {
        case ACTION.SELECTFOLDER: // When a folder is selected, the current state of the folder and folder Id are changed to the select folder
            return {
                folder: payload.folder,
                folderId: payload.folderId,
                childFolders: [],
                childFiles: []
            }
        default: // Returns the current state if you use an ACTION that doesn't exist
            return state
    }
}


function FolderUseLogic (folder = null, folderId = null) {
    const [state, dispatch] = useReducer(reducer, {
        folder,
        folderId,
        childFolders: [],
        childFiles: []
    })

    useEffect (() => { // Changes the state of the folder & folder id
        dispatch({ 
            type: ACTION.SELECTFOLDER,     
            payload: { folder,  folderId }   
        })
    }, [folder, folderId]) // Runs any times the folder id or the folder changes

}

export  { FolderUseLogic }
