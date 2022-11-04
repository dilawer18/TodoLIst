import { StyleSheet } from "react-native"
import colorsPath from "../../constants/colorsPath"
import { moderateScale, moderateScaleVertical } from "../../styles/responsiveSize"


const styles = StyleSheet.create({
    container:{
        // flex:1,
        marginHorizontal:24,
        flex:1,
        backgroundColor:colorsPath.ic_bg,

        
       
    },
    txtStyle:{
        textAlign:'right',
    marginTop:10,
    marginBottom:20,
    },
    orTextStyle:{
        textAlign:'center',
        fontSize:18,
        marginTop:moderateScale(34)
    },
    fontSize:{
        fontSize:12, 
        textAlign:'center', 
        marginTop:moderateScale(24)
    },
    endFlexStyle:{
        marginTop:moderateScale(100),
        justifyContent:'center',
        flexDirection:'row'
    },
    endTextStyle:{
        color: colorsPath.purple
    },socialStyle:{
        flexDirection: "row",
         alignItems: "center", 
         marginTop: 
         moderateScale(20), 
         marginLeft: 54 }
    
})
export default styles