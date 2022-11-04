//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import HeaderComp from '../../Components/HeaderComp';
import imagesPath from '../../constants/imagesPath';

// create a component
const OnBoarding = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComp
            text='Todoist'
            />
            <Swiper>
                <View>
                    <Image source={imagesPath.icFirstOnboard}/>
                    <Text>Manage Task</Text>
                </View>
                <View>
                <Image source={imagesPath.icSecondOnboard}/>
                <Text>Manage Task</Text>
                </View>
                <View>
                <Image source={imagesPath.icThird}/>
                <Text>Manage Task</Text>
                </View>
            </Swiper>
            <Button
            title='goback'
            onPress={()=>{navigation.goBack()}}
            />
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
     
    },
});

//make this component available to the app
export default OnBoarding;
