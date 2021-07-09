import {Dimensions,StyleSheet} from 'react-native'
import {RFPercentage,RFValue} from 'react-native-responsive-fontsize'
const screenWidth=Dimensions.get('screen').width;

export const Style=StyleSheet.create({

    splashmainBox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#416c6e'
    },
    homemainBox:{
        flex:1,
    },
    dflex:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'column',

    },
    TopBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:RFValue(20),
        paddingRight:RFValue(20),
        paddingTop:RFValue(10),
        width:'100%',
        height:50,
        marginTop:45
    }

});