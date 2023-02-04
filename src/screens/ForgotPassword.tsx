import {Text, View, TouchableOpacity} from 'react-native'
import { InputButton } from '../components/InputButton'
import { BackButton } from '../components/BackButton'
import { StandartButton } from '../components/StandartButton'

export function ForgotPassword(){
    return (
        <View className='flex-1 py-20 px-7'>
            <BackButton/>
            <View className="flex-1 justify-center items-center w-full">
                <Text className='text-2xl font-bold'>Password Reset</Text>
                <Text className='mt-3 w-80 text-center'>If you forgot your password, please enter your email address previously registered</Text>
                <InputButton
                    className='mt-8'
                    placeholder='Email'
                />
              <StandartButton
                title="Send"
              />
            </View>
        </View> 
    )
}
