import { StyleSheet } from 'react-native';
import { Colors, font, size } from '../../config/Utils';


export const SingupStyle = StyleSheet.create({
    root: {
        flexGrow: 1,
        backgroundColor: Colors.black
    },
    uppercontainer: {
        flex: 1,
        minHeight: size.height10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    InputFieldContainer: {
        flex: 8,
        minHeight: size.height80,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 80
    },
    image: {
        tintColor: Colors.white,
        height: 25,
        width: 25,

    },
    back: {
        position: 'absolute',
        top: 30,
        left: 25,
        height: 25,
        width: 40,
    },
    singupText: {
        color: Colors.white,
        fontSize: font.h1,
        fontWeight: '700'
    },
    nameContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        // marginBottom: 20,
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop:50,

    },
    fname: {
        width: '46%'
    },
    lname: {
       
        width: '46%'
    },
    Pass: {
        // marginTop: 20,
        width: '46%'
    },
    CPass: {
        // marginTop: 20,
        width: '46%'

    },
    email:{
        marginHorizontal: 30,
        marginTop:10,
    },
    username:{
        flexDirection: 'row',
        paddingHorizontal: 20,
        // marginBottom: 20,
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop:10,
    },
    btn:{
        marginHorizontal:30,
        marginTop:20
    },
    error: {
        color: Colors.danger,
        paddingLeft: 40,
        marginTop: 0
    },
    drop:{
        marginTop:0,
    }
})