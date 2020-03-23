import React from "react"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CreateDialog from '../Exercises/Dialog'

export default ({ muscles, onExerciseCreate }) => 
  <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{flex: 1}}>
          Exercise Database
        </Typography>
        <CreateDialog onCreate={onExerciseCreate} muscles={muscles} /> 
      </Toolbar>
    </AppBar>
