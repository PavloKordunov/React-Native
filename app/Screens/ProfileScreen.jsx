import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import Post from "./components/Post"

const ProfileScreen = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require("../img/Photo_BG.png")} style={styles.backroundImg}>
            <View style={styles.container}>
                <ScrollView  showsVerticalScrollIndicator={false} >
                    <View style={styles.profileWrapper}>
                        <Pressable style={styles.logOutIcon} onPress={() => navigation.navigate("Login")}>
                            <Image source={require("../img/log-out.png")}/>
                        </Pressable>
                        <View style={styles.photoWrapper}>
                            <Image source={require("../img/userPhoto.png")}/>
                            <Image style={styles.plusIcon}source={require('../img/addPhoto.png')}/>
                        </View>
                        <Text style={styles.userName}>Natali Romanova</Text>
                        <Post/>
                        <Post/>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backroundImg: {
        width: "100%",
        flex: 1,
        justifyContent: "flex-end"
    },
    container: {
        position: "relative",
        height: "100%",
        width: "100%"
    },
    profileWrapper: {
        marginTop: 160,
        paddingHorizontal: 16,
        paddingTop: 92,
        width: "100%",
        height: '100%',
        backgroundColor: "white",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        position: "relative",
    },
    logOutIcon: {
        position: "absolute",
        right: 16,
        top: 22,
    },
    userName: {
        textAlign: "center",
        marginBottom: 33,
    
        color: "#212121",
        fontFamily: "Roboto-Medium",
        fontSize: 30,
        fontWeight: 600,
        letterSpacing: 0.3,
    },
    photoWrapper: {
        width: 120,
        height: 120,
        position: "absolute",
        top: -63,
        alignSelf: "center",
    
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
    },
    plusIcon: {
        position: "absolute",
        right: -20,
        bottom: 20,
    }
})

export default ProfileScreen