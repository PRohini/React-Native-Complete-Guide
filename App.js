import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';
export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = goalTitle => {
    console.log(courseGoals)
    if (goalTitle.length === 0) {
      return;
    }
    setcourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  }

  const onDeleteHandler = goalId => {
    setcourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    })
  }
  const cancelGoalADditionHandler = () => {
    setIsAddMode(false);
  }
  return (

    <View style={styles.container}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelGoal={cancelGoalADditionHandler} />

      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={onDeleteHandler}
              items={itemData.item.value} />
          )
          } />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },

});