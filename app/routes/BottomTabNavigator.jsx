import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../Screens/PostsScreen"
import { Image } from "react-native";
import { StyleSheet, Pressable } from "react-native";
import CreatePostScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen"
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ArrowBack from "../Screens/components/ArrowBack";

const Tabs = createBottomTabNavigator()

const BottomTabNavigator = () => {
    const navigation = useNavigation()
    return (
    <Tabs.Navigator
        initialRouteName={"PostsScreen"}
        screenOptions={{
            tabBarStyle: styles.tabBatStyle,
            tabBarItemStyle: styles.tabBarIconStyle,
        }}
    >
        <Tabs.Screen
            name="PostsScreen"
            component={PostsScreen}
            options={{
                title: "Публікації",
                tabBarLabel: "",
                headerTitleAlign: "center",
                headerRight: () => (
                    <Pressable 
                        onPress={() => navigation.navigate('Login')}
                        style={{marginRight: 16}}
                    >
                        <Image source={require("../img/log-out.png")}/>
                    </Pressable>
                ),
                tabBarIcon: ({focused}) => (
                    <Ionicons
                        name='grid-outline'
                        size={20}
                        style={{color: focused ? "#FF6C00" : "#212121CC"}}
                    />
                )
            }}
        />
        <Tabs.Screen
            name="CreatePostScreen"
            component={CreatePostScreen}
            options={{
                title: "Створити публікацію",
                tabBarLabel: "",
                headerTitleAlign: "center",
                headerLeft: ArrowBack,
                tabBarItemStyle: styles.tabBarIconAdd,
                tabBarStyle: {display: "none"},
                tabBarIcon: () => (
                    <AntDesign name="plus" size={20} color="#fff" />
                ),
                unmountOnBlur: true,
            }}
        />
        <Tabs.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
                title: 'Публікації',
                tabBarLabel: "",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <AntDesign
                        name="user"
                        size={18}
                        style={{ color: focused ? "#FF6C00" : "#212121CC" }}
                    />
                )
            }}
        />
    </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBatStyle: {
      height: 83,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    tabBarIconStyle: {
      marginTop: 9,
      marginBottom: 25,
      marginHorizontal: 10,
      maxWidth: 70,
      height: 40,
  
      paddingTop: 8,
  
      borderRadius: 20,
    },
    tabBarIconAdd: {
      marginTop: 17,
      marginBottom: 25,
      marginHorizontal: 10,
      maxWidth: 70,
      height: 40,
      alignItems:"center",
      justifyContent:"center",
  
      backgroundColor: "#FF6C00",
      borderRadius: 20,
    },
  });
  

export default BottomTabNavigator