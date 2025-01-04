import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../Screens/RegisterScreen"
import LoginScreen from "../Screens/LoginScreen"
import BottomTabNavigator from "../routes/BottomTabNavigator"
import CommentsScreen from "../Screens/CommentsScreen"

const MainStack = createStackNavigator()

const rootNavigator = () => {
    return(
            <MainStack.Navigator initialRouteName="Login">
                <MainStack.Screen 
                    name="Registration"
                    component={RegisterScreen}
                    options={{
                        headerStyle: {
                            height: 0,
                          },
                    }}
                />
                <MainStack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerStyle: {
                            height: 0,
                          },
                    }}
                />
                <MainStack.Screen
                    name="Home"
                    component={BottomTabNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <MainStack.Screen
                    name="Comments"
                    component={CommentsScreen}
                    options={{
                        title: "Коментарі",
                        headerTitleAlign: "center"
                    }}
                />
            </MainStack.Navigator>
    )
}

export default rootNavigator