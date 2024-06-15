import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'

const ReviewDetails = ({ route, navigation }) => {

    return (
        <View style={globalStyles.container}>
            <Text>{route.params.title}</Text>
            <Text>{route.params.body}</Text>
            <Text>{route.params.rating}</Text>
            <Button
                title='Go Back'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default ReviewDetails