import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = {
  Paper: { 
    padding: 20, 
    marginTop: 10, 
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}

export default ({ 
    exercises, 
    category, 
    onSelect, 
    exercise: { 
      id, 
      title = 'Welcome!',
      description = 'Please select an exercise from the list on the left'
    } 
  }) =>
  <Grid container spacing={2}>
    <Grid item sm>
      <Paper style={styles.Paper}>
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
                  </ListItem>
                  ) }
                </List>
              </Fragment>
            : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
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
      </Paper>
    </Grid>
  </Grid>