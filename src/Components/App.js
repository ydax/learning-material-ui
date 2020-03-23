import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import { muscles, exercises } from '../store'

export default class extends Component {

  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    const initialExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise
        exercises[muscles] = [...exercises[muscles], exercise]
        return exercises
      }, initialExercises)
    )
  }

  handleCategorySelect = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelect = id => 
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))

  handleExerciseCreate = exercise => {
    exercise = {
      ...exercise, 
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
      }
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  handleExerciseDelete = id => 
    this.setState(({ exercises }) =>({
      exercises: exercises.filter(exercise => exercise.id !== id)
    }))
  

  handleExerciseSelectEdit = id => 
   console.log('This isn\'t set up yet.')
    // this.setState(({ exercises }) => ({
    //   exercise: exercises.find(exercise => exercise.id === id),
    //   editMode: true
    // }))

  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ]
    }))

  render() {
    
    const exercises = this.getExercisesByMuscles(),
      { category, exercise, editMode } = this.state

    return (
      <>
        <CssBaseline />
        <Header 
          muscles={muscles} 
          onExerciseCreate={this.handleExerciseCreate} 
        />

        <Exercises 
          exercise={exercise}
          exercises={exercises} 
          category={category}
          editMode={editMode}
          onEdit={this.handleExerciseEdit}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
        />

        <Footer 
          category={category}
          onSelect={this.handleCategorySelect}
          muscles={muscles}
        />
      </>
    )
  }
}