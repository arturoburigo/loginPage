import { View, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {}

export function InputButton({...rest}: Props){
    return (
        <View>
            <TextInput
                {...rest}
                className='px-4 py-3.5 mt-3 w-80 rounded-lg bg-neutral-200 focus:border-2 focus:border-sky-500'
            />
        </View>
    )
}