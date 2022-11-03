import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextInputComp = ({
    title = '',
    value = '',
    onchangeText = () => { },
    placeholder = '', }) => {
    return (
        <View>
            <Text>{title}</Text>
            <TextInput
                value={value}
                onChangeText={onchangeText}
                placeholder={placeholder}
            />
        </View>
    )
}

export default TextInputComp

const styles = StyleSheet.create({})