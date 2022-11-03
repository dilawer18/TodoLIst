import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const ButtonComp = (
    {
        btnText = '',
        onPress = () => { },
        btnImage
    }
) => {
    return (
        <TouchableOpacity style={style.container}
            onPress={onPress}>
            {/* btnText={btnText} */}
        </TouchableOpacity>
    );
};
const style = StyleSheet.create({
    container: {

    }
})
export default ButtonComp;
