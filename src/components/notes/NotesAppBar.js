import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { startSaveNote, startUploading } from '../../actions/notes'

export const NotesAppBar = ( date ) => {

    const dispatch = useDispatch()
    const { active } = useSelector( state =>state.notes );
    
    const handleSave = (  ) => {
        dispatch(startSaveNote( active ))
    }

    const handlePictureClick = ( ) => {
        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = ( e ) => {
        const file = e.target.files[0];
        if ( file ) {
            dispatch( startUploading( file ) );
        }
    }

    const noteDate = moment( date );


    return (
        <div className="notes__appbar">
            <span> { noteDate.format('MMM Do YY') } </span>
            <input
                id='fileSelector'
                type='file'
                name='file'
                style={{ display: 'none'}}
                onChange={ handleFileChange }
            />

            <div>
                <button 
                    className="btn"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button>

                <button 
                className="btn"
                onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}
