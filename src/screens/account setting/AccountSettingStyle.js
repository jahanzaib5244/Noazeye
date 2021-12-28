import { StyleSheet } from 'react-native';
import { Colors, font, size } from '../../config/Utils';


export const AccountSettingStyle = StyleSheet.create({
    root: {
        flexGrow: 1,
        backgroundColor: Colors.black
    },
    uppercontainer: {
        flex: 0,
        minHeight: size.height20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    InputFieldContainer: {
        flex: 9,
        minHeight: size.height80,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 80
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2
    },

    btn: {
        marginHorizontal: 30,
        marginVertical: 20
    },
    error: {
        color: Colors.danger,
        paddingLeft: 30,
        marginTop: 0
    },
    fname: {
        marginHorizontal: 20,
        marginTop: 50,
    },
    inputfields: {
        marginHorizontal: 20,
        marginTop: 10,
    }
})