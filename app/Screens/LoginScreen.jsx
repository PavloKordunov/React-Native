import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

const LoginScreen = () => {

        const [emailValue, setEmailValue] = useState('')
        const [passwordValue, setPasswordValue] = useState('')
        const [showPassword, setShowPassword] = useState(false)
        const [activeInput, setActiveInput] = useState('')
        const navigation = useNavigation()

    const handleSubmit = () => {
        if (!emailValue || !passwordValue ) {
            alert("Заповніть всі поля");
            return;
        }
        const newUser = {
            email: emailValue,
            password: passwordValue
        }
        setEmailValue('')
        setPasswordValue('')
        console.log(newUser)
        navigation.navigate("Home")
    }

    return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
            <View style={styles.container}>
                <ImageBackground
                    source={require('../img/Photo_BG.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.loginWrapper}>
                        <Text style={styles.loginTitle}>Увійти</Text>
                        <TextInput
                            style={[
                                styles.loginInput,
                                activeInput === "email" && styles.textInputActive,
                            ]}
                           onFocus={() => setActiveInput("email")}
                           onBlur={() => setActiveInput("")}
                           placeholder="Адреса електронної пошти"
                           placeholderTextColor="#BDBDBD"
                           onChangeText={setEmailValue}
                           value={emailValue}
                           />
                        <View style={styles.paswordInputWrapper}>
                            <TextInput
                                style={[
                                    styles.loginInput,
                                    activeInput === "password" && styles.textInputActive,
                                ]}
                                onFocus={() => setActiveInput("password")}
                                onBlur={() => setActiveInput("")}
                               placeholder="Пароль"
                               placeholderTextColor="#BDBDBD"
                               onChangeText={setPasswordValue}
                               value={passwordValue}
                               secureTextEntry={!showPassword}
                               />
                            <Pressable 
                                style={styles.showPasswordBtn}
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Text style={styles.showPasswordText}>
                                    {!showPassword ? "Показати" : "Сховати"}
                                </Text>
                            </Pressable>
                        </View>
                        <Pressable style={styles.loginButton} onPress={handleSubmit}>
                            <Text style={styles.loginButtonText} >Увійти</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("Registration")}>
                            <Text style={styles.signUpText}>
                            Немає акаунту? <Text style={{ textDecorationLine: "underline" }}>Зареєструватися</Text>
                            </Text>
                        </Pressable>
    
                    </View>
                </ImageBackground>
            </View>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    loginWrapper : {
        paddingHorizontal: 16,
        width: "100%",
        backgroundColor: "white",
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
    },
    loginTitle: {
        color:"#212121",
        fontSize: 30,
        marginTop: 32,
        fontWeight:500,
        textAlign: "center",
        marginBottom: 32,
    },
    loginInput: {
        padding: 16,
        height: 50,
        width: "100%",
        color: "#BDBDBD",
        fontSize:16,
        fontWeight:400,
        backgroundColor: "#F6F6F6",
        borderColor: "#E8E8E8",
        borderWidth: 0.5,
        borderRadius: 8,
        marginBottom:16,
    },
    textInputActive: {
        backgroundColor: "#FFFFFF",
        borderColor: "#FF6C00",
    },
    showPasswordBtn: {
        position: "absolute",
        left: "75%",
        top:16,
    },
    showPasswordText: {
        color: "#1B4371",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
    },
    showPasswordBtn: {
        position: "absolute",
        left: "75%",
        top:16,
    },
    showPasswordText: {
        color: "#1B4371",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
    },
    paswordInputWrapper: {
        marginBottom: 27,
        height: 50,
        position: 'relative',
    },
    loginButton: {
        height: 51,
        marginBottom: 16,
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: "center",
    
        backgroundColor: "#FF6C00",
        borderRadius: 100,
    },
    loginButtonText: {
        color: "white",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
    },
    signUpText: {
        textAlign: "center",
        marginBottom: 130,
        color:"#1B4371",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
    }
});
