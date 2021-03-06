import { StyleSheet } from 'react-native'

import { Colors, font, size } from '../../config/Utils'

export const WelcomeStyle = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    logo: {
        flex: 1,
        minHeight: size.height30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    picButtonContaier: {
        flex: 1,
    },
    welcomePic: {
        marginTop:40,
        height: '40%',
        width: '100%',
        resizeMode: 'contain'
    },
    image: {
        height: '30%',
        width: '80%',
        resizeMode:'contain'
    },
    btnContainer: {
        elevation: 4,
        flex: 2,
        minHeight: size.height70,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 80,

    },
    welcomeText: {
      marginTop:13,
        marginHorizontal: 30,
        fontSize: font.h1,
        fontWeight: '800',
        color: Colors.black
    },
    detailText: {
        marginTop: 10,
        marginHorizontal: 30,
        fontSize: font.h3,
        fontWeight: '700',
        color: Colors.black,
        marginBottom: 5

    },
    loginBtn: {
        width: '30%',
        backgroundColor: Colors.black,
        marginHorizontal: 20,
        height: 45,
        borderRadius: 30,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    loginBtnTxt: {
        color: Colors.white,
        fontSize: font.h3,
        fontWeight: '700'
    },
    SingupBtnTxt: {
        color: Colors.black,
        fontSize: font.h3,
        fontWeight: '700'
    },
    rowBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 70,
        flex: 1,
        alignItems: 'flex-end'

    },
    bullet: {
        flexDirection: 'row',
        marginTop: 3,
        width: '100%',
        paddingLeft: 35,
        paddingRight: 30
    },
    BulletImage: {
        height: 6,
        width: 6,
        marginTop: 6,
        marginRight: 8
    },
    BulletText: {
        fontSize: font.h4,
        fontWeight: 'bold',
        color: Colors.black,
        marginHorizontal: 35,
        lineHeight: 18,
    }
})
