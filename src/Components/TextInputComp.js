import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, width } from '../styles/responsiveSize'
import colorsPath from '../constants/colorsPath'

const TextInputComp = ({
    img='',
    title = '',
    value = '',
    onchangeText = () => { },
    placeholder = '', }) => {
    return (
        <View>
            <Text style={styles.textStyle}>{title}</Text>
            <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={onchangeText}
                placeholder={placeholder}
            />
               <TouchableOpacity>
               <Image source={img}/>
               </TouchableOpacity>
            
            </View>
        </View>
    )
}

export default TextInputComp

const styles = StyleSheet.create({
    container:{
        height:moderateScale(48),
        marginTop:moderateScale(10),
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:colorsPath.white,
        borderRadius:8,
        padding:moderateScale(14)
        
    },
    textStyle:{
        fontSize: 28,
        fontWeight: 'bold',
        color:colorsPath.purple
    }
})