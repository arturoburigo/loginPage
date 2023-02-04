import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { ForgotPassword } from '../screens/ForgotPassword'
import {LoginPage} from '../screens/LoginPage'
import {SignUp} from '../screens/SignUp'

 
const { Navigator, Screen}  = createNativeStackNavigator()


export function AppRoutes() {
    
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name='login'
                component={LoginPage}
            />
            <Screen
                name='signup'
                component={SignUp}
            />
            <Screen
                name='forgotpassword'
                component={ForgotPassword}
            />
        </Navigator>
    )
}