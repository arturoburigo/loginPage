import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from "react-native"
import { InputButton } from "../components/InputButton"
import { StandartButton } from "../components/StandartButton";


export function SignUp(){
    const {navigate} = useNavigation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <>  
            <KeyboardAvoidingView
                behavior='padding'
                className='flex-1 items-center justify-center'
            >
            
            <View>
                <Text className="font-bold text-2xl mb-6">Create an aaccount!</Text>
                <View className="items-center w-80">
                        <InputButton
                            placeholder="Name"
                            value={name}
                            onChangeText={text=> setName(text)}
                        />
                        <InputButton
                            placeholder="Email"
                            value={email}
                            keyboardType='email-address'
                            autoCapitalize={"none"}
                            onChangeText={text => setEmail(text)}
                        />
                        <InputButton
                            placeholder="Password"
                            value={password}
                            autoCapitalize={"none"}
                            onChangeText={text=> setPassword(text)}
                            secureTextEntry
                        />
                        <InputButton
                            placeholder="Confirm Password"
                            autoCapitalize={"none"}
                            value={confirmPassword}
                            onChangeText={text=> setConfirmPassword(text)}
                            secureTextEntry
                        />
                        
                        <StandartButton
                            title="Sign Up"
                        />

                        <View className='flex-row mt-16'>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity 
                                activeOpacity={0.7}
                                onPress={()=>navigate('login')}
                            >
                                <Text className='text-sky-400'> Login Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>      
        </> 
    )
}