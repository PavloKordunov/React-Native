import { useNavigation } from "@react-navigation/native"
import { Image, Pressable } from "react-native"

const ArrowBack = () => {
    const navigation = useNavigation()
    return (
        <Pressable
            onPress={() => navigation.navigate("PostsScreen")}
        >
            <Image 
                style={{
                    height: 24,
                    width: 24
                }}
                source={require("../../img/arrow-left.png")}
            />
        </Pressable>
    )
}

export default ArrowBack