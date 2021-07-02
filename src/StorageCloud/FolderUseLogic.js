import React, { useEffect, useReducer } from 'react'


const RootFolder = { // This is where the user will be when the user first logs in. It is given the properties to mimic an actual folder
    name: 'Root',
    id: null,
    path: []
}



const ACTION = { // All of the actions are put in constants for reusability to avoid typos
    SELECTFOLDER: 'SelectFolder',
    UPDATEFOLDER: 'UpdateFolder'
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
        case ACTION.UPDATEFOLDER: // Takes the current state, and updates the folder property to be whatever the folder property is in payload
            return {
                ...state,
                folder: payload.folder
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


    useEffect (() => { // Gives the program information about the folder before the folder loads. That way the breadcrumbs, child folders, & child files can load before the folder itself loads
        if (folder == null) {
            dispatch({ 
                type: ACTION.UPDATEFOLDER,     
                payload: { folder: RootFolder } // When the user is not in any real folder, they are in the root folder
            })

            return dispatch;
        }
    }, [folderId]) // Runs any times the folder id or the folder changes

    return state;
}

export  { FolderUseLogic}
