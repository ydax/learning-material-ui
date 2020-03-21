import React from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'

const styles = {
  Paper: { 
    padding: 20, 
    marginTop: 10, 
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}

export default ({ exercises }) =>
  <Grid container spacing={2}>
    <Grid item sm>
      <Paper style={styles.Paper}>
        { exercises.map(([group, exercises]) => 
          <>
          <Typography 
            variant="h6"
            style={{textTransform: 'capitalize'}}
          >
            { group }
          </Typography>
          <List component="ul">
            { exercises.map(({ title }) =>
              <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
            ) }
          </List>
          </>
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography
          variant="h5"
        >
          Welcome!
        </Typography>
        <Typography
          variant="subtitle1"
          style={{marginTop: 20}}
        >
          Please select an exercise from the list on the left
        </Typography>
      </Paper>
    </Grid>
  </Grid>