import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colorsPath from '../constants/colorsPath';
import { height, moderateScale, moderateScaleVertical } from '../styles/responsiveSize';

const HeaderComp = ({
    text
}) => {
    return (
        <View style={styles.container}>
       
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        
        marginTop:moderateScaleVertical(18),
        justifyContent:'center',
        width:"100%",
        alignItems:'center'

    },
    textStyle: {
        fontSize: 34,
        fontWeight: 'bold',
        color:colorsPath.purple
    }
});
export default HeaderComp;
