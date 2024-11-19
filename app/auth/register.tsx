import React from "react";
import {
    Image,
    KeyboardAvoidingView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import logo from "../../assets/images/logo.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
    GestureHandlerRootView,
    TextInput,
} from "react-native-gesture-handler";
import { router } from "expo-router";

const RegisterPage = () => {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <GestureHandlerRootView style={styles.container}>
                <KeyboardAvoidingView style={styles.mainContainer}>
                    <Image source={logo} style={styles.logo} /> 

                    <View style={[styles.inputContainer, { marginTop: 20}]}>
                        <MaterialIcons name="people" size={24} color="black" />
                        <TextInput
                            placeholder="Enter Your Name"
                            style={styles.input}
                        />
                    </View>

                    <View style={[styles.inputContainer, { marginTop: 20 }]}>
                        <MaterialIcons name="email" size={24} color="black" />
                        <TextInput
                            placeholder="Enter Your Email"
                            style={styles.input}
                        />
                    </View>


                    <View style={[styles.inputContainer, { marginTop: 20}]}>
                        <MaterialIcons name="lock" size={24} color="black" />
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Enter Your Password"
                            style={styles.input}
                        />
                    </View>

                    <TouchableOpacity style={styles.submitBtn}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold',}}>
                            Register
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push('/auth/login')}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 20}}>Have an account? Login</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </GestureHandlerRootView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1D",
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    mainContainer: {
        backgroundColor: "white",
        height: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        display: "flex",
        flexDirection: "column",
    },
    logo: {
        resizeMode: "contain",
        width: 250,
        alignSelf: "center",
        marginTop: 40,
        marginBottom: 20
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        maxWidth: "100%",
        marginHorizontal: 20,
        height: 60,
        backgroundColor: "lightgray",
        borderRadius: 10,
        gap: 5,
    },
    input: {
        width: '80%',
        fontSize: 16,
    },
    submitBtn: {
        backgroundColor: '#1A1A1D',
        maxWidth: '100%',
        height: 60,
        marginHorizontal: 20,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        marginTop: 40,
    }
});

export default RegisterPage;
