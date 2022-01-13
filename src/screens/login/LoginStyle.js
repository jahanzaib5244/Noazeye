import { StyleSheet } from 'react-native';
import { Colors, font, size } from '../../config/Utils';

export const LoginStyle = StyleSheet.create({
    root: {
        flexGrow: 1,
        backgroundColor: Colors.primary,
    },
    logo: {
        flex: 1,
        minHeight: size.height30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 2,
        minHeight: size.height70,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 80,
        elevation:4
    },
    image: {
        height: '30%',
        width: '80%',
        resizeMode:'contain'
    },
    loginText: {
        fontSize: font.h1,
        alignSelf: 'center',
        color: Colors.black,
        fontWeight: '600',
        paddingTop: '10%'
    },
    inputfield: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    btn: {
        marginHorizontal: 30,
        marginTop: "10%"
    },
    forget: {
        width: '100%',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingRight: 30,


    },
    forgetBtn: {
        padding: 8,
    },
    forgettext: {
        color: Colors.black,
        elevation: 2
    },
    error: {
        color: Colors.danger,
        paddingLeft: 40,
        marginTop: 5
    }
})
