import React, {Component} from 'react';
import {
        StyleSheet,
        Text,
        View,
        Image
} from 'react-native';

export default class Logo extends Component<{}> {
        render() {
                return (
                        <View style={styles.container}>
                                <Image
                                        style={styles.image}
                                        source={require('../images/Logo.jpg')}
                                />
                                <Text style={styles.logoText}>
                                        Welcome Homie
                                </Text>
                        </View>

                )
        }
}

const styles = StyleSheet.create({
        container: {
                flexGrow : 1,
                justifyContent: 'flex-end',
                alignItems: 'center'
        },
        logoText: {
                marginVertical: 15,
                fontSize: 18,
                color: 'rgba(255, 255, 255, 0.7)'
        },
        image: {
                height: 150,
                width: 150,
                resizeMode: 'stretch'
        }
});
