import {Text, View, TouchableOpacity} from 'react-native'

interface Props{
    title: string
}

export function StandartButton({title}: Props) {
    return (
        <View className='justify-center items-center mt-7'>
            <TouchableOpacity  activeOpacity={0.7} className='w-80 bg-sky-500  py-3.5 rounded-lg items-center'>
                <Text className='font-bold text-base text-white'>{title}</Text>
            </TouchableOpacity>
    </View>
    )
}