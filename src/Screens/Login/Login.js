import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import TextInputComp from '../../Components/TextInputComp'
import HeaderComp from '../../Components/HeaderComp'
import ButtonComp from '../../Components/ButtonComp'

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.container}>
                <HeaderComp
                    text='Todoist'
                />

                <View style={styles.inputStyle}>
                    <TextInputComp
                        title='Login'
                        placeholder='E-mail Address'
                    />
                    <TextInputComp
                        placeholder='Password'
                    />
                     <View>
                     <TouchableOpacity>
                        <Text style={styles.txtStyle}>Forget Password</Text>
                    </TouchableOpacity>
                     </View>
                    <ButtonComp
                        btnText='Login'
                        onPress={() => navigation.navigate('OnBoarding')}
                    />
                </View>
        
                <View style={styles.endFlexStyle}>
                    <Text >Don't have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.endTextStyle}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default Login

