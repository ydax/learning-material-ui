import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import Form from './Form'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  Grid: {
    padding: 6,
  },
  Paper: { 
    padding: 20, 
    marginTop: 5, 
    height: 500,
    overflowY: 'auto'
  }
})

export default withStyles(styles)(
  ({ 
      classes,
      exercises, 
      category, 
      onSelect, 
      editMode,
      exercise,
      exercise: { 
        id, 
        title = 'Welcome!',
        description = 'Please select an exercise from the list on the left'
      },
      onEdit,
      onDelete,
      onSelectEdit
    }) =>
    <Grid container className={classes.Grid} spacing={1}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          { exercises.map(([group, exercises]) => 
            !category || category === group
              ? <Fragment key={group}>
                  <Typography 
                    variant="h6"
                    style={{textTransform: 'capitalize'}}
                  >
                    { group }
                  </Typography>
                  <List component="ul">
                    { exercises.map(({ title, id }) =>
                      <ListItem
                        key={id}
                        onClick={() => onSelect(id)}
                        button
                      >
                      <ListItemText 
                        primary={title} 
                      />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onDelete(id)}>
                          <Delete />
                        </IconButton>
                        <IconButton onClick={() => onSelectEdit(id)}>
                          <Edit />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    ) }
                  </List>
                </Fragment>
              : null
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          { editMode 
            ? <Form
              muscles={category}
              onSubmit={onEdit}
              exercise={exercise}
            />
            : <>
                <Typography
                  variant="h5"
                >
                  { title }
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{marginTop: 20}}
                >
                  { description }
                </Typography>
            </>
          }
        </Paper>
      </Grid>
    </Grid>
  )