import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.about}>
                <Image
                    style={styles.img}
                    source={{
                        uri: 'data:image/jpeg;base64,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'
                    }}
                />
                <View>
                    <Text style={styles.text}>Name: Steve Jobs</Text>
                    <Text style={styles.text}>Email: steveJobs@gmail.com</Text>
                </View>
            </View>
            <View style={styles.btnBlock}>
                <View style={styles.btn}>
                    <Button
                        color='#4094a3'
                        title='Change theme to: light'
                    />
                </View>
                <View style={styles.btn}>
                    <Button
                        color='#4094a3'
                        title='Logout'
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3a474e',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnBlock: {
        height: 90,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btn: {
        width: 350,
    },
    about: {
        marginVertical: 10,
        paddingVertical: 20,
        borderRadius: 8,
        flexDirection: 'row',
        width: 350,
        alignItems: 'center',
        backgroundColor: '#65727a',
    },
    text: {
        color: '#fff',
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 40,
        marginHorizontal: 20,
    },
});