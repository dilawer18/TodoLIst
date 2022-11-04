import { StyleSheet } from "react-native";
import colorsPath from "../../constants/colorsPath";
import { moderateScale, moderateScaleVertical } from "../../styles/responsiveSize";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colorsPath.ic_bg,
        paddingHorizontal:moderateScale(16),
    },
    inputStyle:{
        marginTop:30,
        flex:1,
        
    },
    txtStyle:{
    textAlign:'right',
    marginTop:10,
    marginBottom:20,
    

    },
    endFlexStyle:{
        justifyContent:'center',
        flexDirection:'row'
    },
    endTextStyle:{ 
        color: colorsPath.purple
     },

});
export default styles