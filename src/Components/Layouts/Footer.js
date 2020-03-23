import React from "react"
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default ({ muscles, category,  onSelect }) => {

  const notXs = useMediaQuery('(min-width:600px)');

  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '' : muscles[index - 1])

  return <Paper>
    <Tabs
      value={index}
      onChange={onIndexSelect}
      indicatorColor="primary"
      textColor="primary"
      variant={!notXs ? "scrollable" : null}
      scrollButtons="on"
      centered={notXs}
    >
      <Tab label="All" />
      { muscles.map(group => 
        <Tab label={group} key={group} />
      )}
    </Tabs>
  </Paper>
}