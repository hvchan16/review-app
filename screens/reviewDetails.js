import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'

const ReviewDetails = ({ route, navigation }) => {
    const rating = route.params.rating;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <View style={styles.rating}>
                    <Text>Rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
            <Button
                title='Go Back'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default ReviewDetails

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});