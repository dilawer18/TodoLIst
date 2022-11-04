import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import HeaderComp from '../../Components/HeaderComp'
import TextInputComp from '../../Components/TextInputComp'
import ButtonComp from '../../Components/ButtonComp'
import SocialComp from '../../Components/SocialComp'
import imagesPath from '../../constants/imagesPath'
import { moderateScale } from '../../styles/responsiveSize'

const SignUp = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <HeaderComp
                    text='Todoist'
                />
                <View>
                    <TextInputComp
                        title='Sign Up'
                        placeholder='Name'
                    />
                    <TextInputComp
                        placeholder='Phone Number'
                    />
                    <TextInputComp
                        placeholder='E-mail Address'
                    />
                    <TextInputComp
                        placeholder='Password'
                        img={imagesPath.icVissibleOf}
                    />
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.txtStyle}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>
                    <ButtonComp
                        btnText='Sign Up'
                        onPress={()=>{navigation.navigate('Login')}}
                    />
                    <View>

                        <Text style={styles.orTextStyle}>OR</Text>
                        <Text style={styles.fontSize}>Signup with </Text>
                    </View>
                    <View style={styles.socialStyle}>
                        <SocialComp
                            icon={imagesPath.icMail}
                        />
                        <SocialComp
                            icon={imagesPath.icApple}
                        />
                        <SocialComp
                            icon={imagesPath.icFb}
                        />
                    </View>
                    <View style={styles.endFlexStyle}>
                        <Text >Already have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.endTextStyle}>Log In</Text>
                        </TouchableOpacity>

                    </View>




                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUp

