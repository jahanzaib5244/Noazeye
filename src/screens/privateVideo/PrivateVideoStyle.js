import {StyleSheet} from 'react-native';
import { size,font } from '../../config/Utils';

export const PrivateVideoStyle = StyleSheet.create({
    root: {
        flex: 1
    },
    buttonContainer: {
        height: 50,
        width: size.width100,
        position: 'absolute',
        top: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    back: {
        tintColor: 'white',
        height: 30,
        resizeMode: 'contain',
        width: 40,
        padding: 10,
        marginLeft: 20
    },
    close: {
        tintColor: 'white',
        height: 30,
        resizeMode: 'contain',
        width: 30,
        padding: 10,
        marginRight: 20

    },
    Text:{
        color:'white',
        fontWeight:'700',
        fontSize:font.h2
    }
})