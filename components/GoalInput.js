import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredInput, setEnteredInput] = useState('');

    const inputGoalHandler = (enteredInput) => {
        setEnteredInput(enteredInput);
        console.log(" entered Input ::: ", enteredInput);
    }
    const addGoalHandler = () => {
        props.onAddGoal(enteredInput);
        setEnteredInput('');

    }
    return (
        <Modal visible={props.visible} animationType="slide">

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder=" Course Goal"
                    style={styles.input}
                    onChangeText={inputGoalHandler}
                />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="CANCEL" color="red" onPress={props.onCancelGoal} />
                    <Button
                        title="ADD"
                        onPress={addGoalHandler} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        width: "40%"
    },
})
export default GoalInput;