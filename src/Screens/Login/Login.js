import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import TextInputComp from '../../Components/TextInputComp'
import HeaderComp from '../../Components/HeaderComp'
import ButtonComp from '../../Components/ButtonComp'

const Login = () => {
    return (
        <View style={styles.container}>

            <HeaderComp
                text='Todoist'
            />
            <View style={{ flex: 1, }}>

                <TextInputComp
                    title='Login'
                    placeholder='E-mail Address'
                />
                <TextInputComp
                    placeholder='Password'
                />
                <Text>Forget Password</Text>
                <ButtonComp
                    btnText='Login'
                />
            </View>

        </View>
    )
}

export default Login

