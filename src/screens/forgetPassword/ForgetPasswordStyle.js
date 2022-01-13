import { StyleSheet } from 'react-native';
import { Colors, font, size } from '../../config/Utils';


export const ForgetPasswordStyle = StyleSheet.create({
    root: {
        flexGrow: 1,
        backgroundColor: Colors.primary
    },
    uppercontainer: {
        flex: 1,
        minHeight: size.height20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    InputFieldContainer: {
        flex: 8,
        elevation:4,
        minHeight: size.height80,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 80
    },
    image: {
        tintColor: Colors.black,
        height: 25,
        width: 25,

    },
    back: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 25,
        width: 40,
        padding:30,
      
    },
    singupText: {
        color: Colors.black,
        fontSize: font.h1,
        fontWeight: '700'
    },
  
   
    email:{
        marginHorizontal: 30,
        marginTop:70
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:30,
        marginTop:50
    },
    btnContainer:{
        height:size.height60,
        justifyContent:'center',
    },
    error:{
        color: Colors.danger,
        paddingLeft: 40,
        marginTop: 5
    }
})