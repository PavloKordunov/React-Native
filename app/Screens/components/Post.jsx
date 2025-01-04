import { Image, View, Text, Pressable, StyleSheet } from "react-native"

const Post = () => {
    return (
        <Pressable style={styles.postContainer}>
            <View style={styles.profileInfo}>
                <Image
                    style={styles.profilePic}
                    source={require("../../img/userPhoto.png")}
                />
                <View >
                    <Text style={styles.profileName}>Natali Romanova</Text>
                    <Text style={styles.profileMail}>email@example.com</Text>
                </View>
            </View>
            <Text style={styles.postTitle}>Дивовижні Карпати</Text>
            <Image style={styles.postPic} source={require("../../img/pic1.png")}/>
            <View style={styles.postStatsContainer}>
                <View style={styles.likesComents}> 
                <View style={styles.postStatsWrapper}>
                    <Image source={require("../../img/comment.png")}/>
                    <Text >0</Text>
                </View>
                <View style={styles.postStatsWrapper}>
                    <Image source={require("../../img/like.png")}/>
                    <Text >0</Text>
                </View>
                <View style={styles.postStatsWrapper}>
                    <Image source={require("../../img/location.png")}/>
                    <Text>Ivano-Frankivs'k Region, Ukraine</Text>
                </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        paddingHorizontal: 16,
        paddingVertical:32,
    },
    profilePic: {
        width:45,
        height:45,
    },
    profileInfo: {
        flexDirection:"row",
        marginBottom: 12,
        gap:8
    },
    profileName: {
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "Roboto",
        color: "#212121",
    },
    profileMail: {
        fontSize: 11,
        fontWeight: 400,
        fontFamily: "Roboto",
        color: "#212121",
    },
    postTitle: {
        fontSize: 16,
        fontWeight: 500,
        fontFamily: "Roboto",
        color: "#212121",
        marginBottom: 8
    },
    postPic: {
        width:"100%",
        borderRadius: 8,
        marginBottom: 8
    },
    postStatsContainer: {
        flexDirection: "row"
    },
    likesComents: {
        flexDirection: "row",
        gap: 24
    },
    postStatsWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    }
})

export default Post