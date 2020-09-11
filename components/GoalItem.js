import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.items}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        marginTop: 10,
        backgroundColor: '#CCC',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center'
    }
})
export default GoalItem;