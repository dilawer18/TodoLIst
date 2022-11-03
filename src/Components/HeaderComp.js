import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
        flex: 1,
    },
    textStyle: {
        fontSize: 28,
        fontWeight: 'bold'
    }
});
export default HeaderComp;
