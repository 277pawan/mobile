import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button } from 'react-native'
import nutrilogo from "./assets/nutrilogo.png"
import nutricard from "./assets/nutricard.png"
import React from 'react'

const Index = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.childcontainer}>
                    <Image source={nutrilogo} style={styles.logo} />
                    <Text style={styles.text}>Nutri Hub</Text>
                    <View style={styles.imageContainer}>
                        <Image source={nutricard} style={styles.nutricard} />
                        <Image source={nutricard} style={styles.nutricard} />
                    </View>
                    <TouchableOpacity style={styles.button}
                        activeOpacity={0.8}
                        onPress={() => console.log('Button pressed!')}
                        onPressIn={() => console.log('Press in')}
                        onPressOut={() => console.log('Press out')}
                        onLongPress={() => console.log('Long press')}
                        delayPressIn={10}
                        delayPressOut={10}
                        delayLongPress={500}
                    >
                        <Text style={styles.buttonText}>Sign in with Email</Text>
                    </TouchableOpacity>
                    <Text style={styles.desc}>Nutri Hub is one of the best store in the market place to get know about the nutrients and vitamins found in a food</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "black",
    },
    childcontainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginTop: 100,
        gap: 10,
        backgroundColor: 'black',
    },
    imageContainer: {
        width: "full",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        gap: 10,
    }
    ,
    logo: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    nutricard: {
        height: 400,
        width: 190,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontFamily: "Arial sans-serif",
        fontSize: 34
    },
    desc: {
        marginTop: 30,
        color: 'white',
        fontSize: 16,
        textAlign: "center",
    },
    button: {
        width: "60%",
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: "center",
        color: 'white',
        fontSize: 20,
    }
})
