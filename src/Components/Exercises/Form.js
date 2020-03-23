import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => console.log(theme) || ({
  FormControl: {
    width: 250,
    },
}))

const Form = ({ onSubmit, muscles, setOpen, exercise: selectedExercise }) => {

    const classes = useStyles()

    const [exercise, setExercise] = useState({
        title: '',
        description: '',
        muscles: ''
    })

    const handleChange = e => {
        e.preventDefault()
        setExercise({ ...exercise, [e.target.name]: e.target.value })
    }

    const handleSubmit = exercise => {
        // TODO Validation
        onSubmit(exercise)
        setExercise({
            title: '',
            description: '',
            muscles: '',
        })
        setOpen(false)
    }

    return (
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
                { muscles.map(group => 
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
            <DialogActions
                style={{paddingTop: 25}}
            >
                <Button 
                    onClick={() => handleSubmit(exercise)} 
                    color="primary" 
                    variant="contained"
                >
                    Create
                </Button>
            </DialogActions>
        </form>
    )
}

export default Form