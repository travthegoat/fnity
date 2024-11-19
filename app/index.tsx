import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from "../assets/images/logo.png";

const HomePage = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
            <View style={styles.container}>
                
                <View style={styles.mainContainer}>
                    <Image source={logo} style={styles.logo} />

                    <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('/auth/login')}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 700 }}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.registerBtn} onPress={() => router.push('auth/register')}>
                            <Text>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1A1A1D',
        justifyContent: 'flex-end',
    },
    mainContainer: {
        height: '40%',
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: 250
    },
    loginBtn: {
        width: 120,
        height: 50,
        backgroundColor: '#1A1A1D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    registerBtn: {
        width: 120,
        height: 50,
        borderWidth: 1,
        borderColor: '#1A1A1D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})

export default HomePage;