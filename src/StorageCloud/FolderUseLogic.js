import React, { useEffect, useReducer } from 'react'
import { userCollections } from '../Firebase/firebase'
import {useAuthContext} from '../Firebase/authorization'


const RootFolder = { // This is where the user will be when the user first logs in. It is given the properties to mimic an actual folder
    name: 'Root',
    id: null,
    path: []
}



const ACTION = { // All of the actions are put in constants for reusability to avoid typos
    SELECTFOLDER: 'SelectFolder',
    UPDATEFOLDER: 'UpdateFolder',
    SETCHILDFOLDERS: 'SETChildFolders'
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
        case ACTION.SETCHILDFOLDERS:
            return {
                ...state,
                childFolders: payload.childFolders
            }
        default: // Returns the current state if you use an ACTION that doesn't exist
            return state
    }
}



function FolderUseLogic (folder = null, folderId = null) {
    const { currentUser } = useAuthContext(); 

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

        userCollections.folders.doc(folderId).get() // Retrieves the current folder based on its id
            .then(doc => {
                const docData = {
                    id: doc.id,
                    ...doc.data()
                }

                console.log('Document data: ' + JSON.stringify(docData));

                dispatch({ 
                    type: ACTION.UPDATEFOLDER,     
                    payload: { folder: docData } 
                })
            })
            .catch (() => { // If the current folder can not be retrieved, then it is returnd back to the root folder
                dispatch({ 
                    type: ACTION.UPDATEFOLDER,     
                    payload: { folder: RootFolder } 
                })
            })

            
    }, [folderId]) // Runs any times the folder id changes


    useEffect (() => {
        return userCollections.folders
            .where('parentFolderId', '==', folderId)
            .where('userId', '==', currentUser.uid)     // Searches only for folders that belong to the current use logged in
            // .orderBy('createdAt')                       // Sorts data from oldest to newest
            .onSnapshot(querySnapshot => {

                const children = []

                querySnapshot.forEach(doc => {
                    const docData = {
                        id: doc.id,
                        ...doc.data()
                    }

                   console.log('Doc from snapshot:\n' + JSON.stringify(docData)) 

                    children.push(docData)
                    
                }) 
                
                dispatch({
                    type: ACTION.SETCHILDFOLDERS,
                    payload: { childFolders: children }
                })
            })      
    }, [currentUser, folderId])// Runs any times the current user or folder id changes

    

    return state;
}

export  { FolderUseLogic}
