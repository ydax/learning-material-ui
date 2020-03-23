import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import Add from '@material-ui/icons/Add'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
  FormControl: {
        width: 500,
    },
}))

const CreateDialog = ({ muscles, onCreate }) => {

    const classes = useStyles()
 
    const [open, setOpen] = useState(false)
    const [exercise, setExercise] = useState({
        title: '',
        description: '',
        muscles: '',
    })

    const categories = muscles

    const handleChange = e => {
        e.preventDefault()
        setExercise({ ...exercise, [e.target.name]: e.target.value })
    }

    const handleSubmit = exercise => {
        // TODO Validation
        onCreate(exercise)
        setExercise({
            title: '',
            description: '',
            muscles: '',
        })
        setOpen(false)
    }

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
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField 
                        label="Title"
                        name="title"
                        value={exercise.title}
                        onChange={(e => handleChange(e))}
                        className={classes.FormControl}
                    />
                    <br />
                         <FormControl
                            className={classes.FormControl}
                         >
                            <InputLabel htmlFor="muscles">Muscles</InputLabel>
                            <Select
                                name="muscles"
                                onChange={e => handleChange(e)}
                                value={exercise.muscles}
                            >
                            { categories.map(group => 
                                <MenuItem key={group} value={group}>
                                    { group.charAt(0).toUpperCase() + group.slice(1) }
                                </MenuItem>
                            )}
                            </Select>
                        </FormControl>
                    <br />
                    <TextField 
                        label="Description"
                        multiline
                        rows='4'
                        name="description"
                        value={exercise.description}
                        onChange={e => handleChange(e)}
                        className={classes.FormControl}
                    />
                </form>
                </DialogContent>
                <DialogActions>
                    <Button 
                        onClick={() => handleSubmit(exercise)} 
                        color="primary" 
                        variant="contained"
                    >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CreateDialog;