import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Add from '@material-ui/icons/Add'
import Form from './Form'

const CreateDialog = ({ muscles, onCreate }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Fab size="small" onClick={() => setOpen(!open)} >
                <Add />
            </Fab>
            <Dialog open={open} onClose={() => setOpen(!open)}>
                <DialogTitle id="form-dialog-title">
                    Create a New Exercise
                </DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please fill out the form below.
                </DialogContentText>
                <Form 
                    muscles={muscles}
                    onSubmit={onCreate}
                    setOpen={setOpen}
                />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default CreateDialog;