import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

const RegisterScreen = () => {

    const [loginValue, setLoginValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [activeInput, setActiveInput] = useState('')
    const navigation = useNavigation()

    const handleSubmit = () => {
        if (!loginValue || !emailValue || !passwordValue) {
            alert("Заповніть всі поля");
            return;
        }
        const newUser = {
            login: loginValue,
            email: emailValue,
            password: passwordValue
        }
        setLoginValue('')
        setEmailValue('')
        setPasswordValue('')
        console.log(newUser)
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
                <View style={styles.signupWrapper}>
                    <View style={styles.photoWrapper}>
                        <Image style={styles.photoCard} source={require('../img/userPhoto.png')}/>
                        <Image style={styles.addPhotoIcon} source={require('../img/addPhoto.png')}/>
                    </View>
                    <Text style={styles.signupTitle}>Реєстрація</Text>
                    <TextInput
                        style={[
                            styles.signupInput,
                            activeInput === "login" && styles.textInputActive,
                        ]}
                        onFocus={() => setActiveInput("login")}
                        onBlur={() => setActiveInput("")}
                        placeholder="Логін"
                        placeholderTextColor="#BDBDBD"
                        onChangeText={setLoginValue}
                        value={loginValue}
                    />
                    <TextInput
                        style={[
                            styles.signupInput,
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
                                styles.signupInput,
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
                    <Pressable style={styles.signupButton} onPress={handleSubmit}>
                        <Text style={styles.signupButtonText} >Зареєстуватися</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.loginText}>
                            Вже є акаунт? <Text style={{ textDecorationLine: "underline" }}>Увійти</Text>
                        </Text>
                    </Pressable>

                </View>
            </ImageBackground>
        </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    signupWrapper : {
        paddingHorizontal: 16,
        width: "100%",
        backgroundColor: "white",
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        position: "relative"
    },
    photoWrapper:{
        width: 120,
        height: 120,
        position: "absolute",
        bottom: 489,
        left: "50%",
        transform: [{ translateX: -50 }],
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
    },
    photoCard: {
        width: 120,
        height: 120,
        zIndex: 1,
    },
    addPhotoIcon: {
        position: 'absolute',
        zIndex:10,
        right: -20,
        bottom: 10,
    },
    signupTitle: {
        color:"#212121",
        fontSize: 30,
        marginTop: 92,
        fontWeight:500,
        textAlign: "center",
        marginBottom: 32,
    },
    signupInput: {
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
    paswordInputWrapper: {
        marginBottom: 27,
        height: 50,
        position: 'relative',
    },
    signupButton: {
        height: 51,
        marginBottom: 16,
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: "center",
    
        backgroundColor: "#FF6C00",
        borderRadius: 100,
    },
    signupButtonText: {
        color: "white",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
    },
    loginText: {
        textAlign: "center",
        marginBottom: 78,
        color:"#1B4371",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
    }
});
