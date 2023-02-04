import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { InputButton } from '../components/InputButton';
import { StandartButton } from '../components/StandartButton';

export function LoginPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {navigate} = useNavigation()

  return (
    <KeyboardAvoidingView
        behavior='padding'
        className='flex-1'
    >
        <View className='w-full flex-1 justify-center items-center'>
            <View>
                <Text className='font-bold mb-6 text-2xl'>Welcome!</Text>
                <InputButton
                    placeholder='Email'
                    value={email}
                    keyboardType='email-address'
                    onChangeText={text=> setEmail(text)}
                />
                <InputButton
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
            </View> 

            <StandartButton
                title="Login"
            />

            <View className='justify-center items-center'>
                <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('forgotpassword')}>
                    <Text className='mt-11 text-sky-400'>Forgot password?</Text>
                </TouchableOpacity>
            </View>
            <View className='flex-row justify-center items-center mt-10 w-52'>
                <TouchableOpacity activeOpacity={0.7} className='mr-10 border border-zinc-400 px-7 py-3.5 rounded-lg'>
                    <View className='flex-row justify-center items-center'>
                        <AntDesign name="google" size={24} color="#4285F4"/>
                        <Text className='ml-2'>Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} className='border border-zinc-400 px-7 py-3.5 rounded-lg'>
                <View className='flex-row justify-center items-center'>
                <Entypo name="facebook" size={24} color="blue" />
                    <Text className='text-blue-700 ml-2'>Facebook</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View className='flex-row mt-16'>
                <Text>Don't have an account yet?</Text>
                <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={()=>navigate('signup')}
                >
                    <Text className='text-sky-400'> SignUp</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    </KeyboardAvoidingView>  
  );
};
