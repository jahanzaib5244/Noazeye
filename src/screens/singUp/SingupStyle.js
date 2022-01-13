import { StyleSheet } from 'react-native';
import { Colors, font, size } from '../../config/Utils';


export const SingupStyle = StyleSheet.create({
    root: {
        flexGrow: 1,
        backgroundColor: Colors.primary
    },
    uppercontainer: {
        flex: 1,
        minHeight: size.height10,
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
        padding:30
    },
    singupText: {
        color: Colors.black,
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
        width: '46%'
    },
    CPass: {
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
        marginTop: 5,
        paddingRight:30,
        
    },
    drop:{
        marginTop:10,
    }
})