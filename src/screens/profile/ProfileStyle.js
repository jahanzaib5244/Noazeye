import { StyleSheet } from 'react-native';
import { Colors, font, size } from '../../config/Utils';


export const ProfileStyle = StyleSheet.create({
    root: {
        flexGrow: 1,
        backgroundColor: Colors.black
    },
    upperContainer: {
        flex: 1,
        minHeight: size.height30,
        backgroundColor: Colors.black
    },
    lowerContainer: {
        flex: 3,
        minHeight: size.height70,
        backgroundColor: Colors.white,
        borderTopLeftRadius:80,
    },
    profileCard: {
        alignSelf: 'center',
        height: 230,
        backgroundColor: Colors.profileCard,
        elevation: 2,
        shadowColor: Colors.black,
        position: 'absolute',
        top: size.height10,
        width: size.width90,
        borderRadius: 20,
    },
    cardText: {
        color: Colors.white,
        fontSize: 22,
        alignSelf:'center',
        marginTop:6,
        fontWeight:'700',
        textTransform:'capitalize'
    },
    cardImage:{
        height:120,
        width:120,
        borderRadius:120/2,
        alignSelf:'center',
        backgroundColor:'red',
        marginTop:25
    },
    cardText2:{
        color: 'gray',
        fontSize: font.h3,
        alignSelf:'center',
        marginTop:6,
        fontWeight:'700'
    },
    fName:{
        marginTop:50,
        marginHorizontal:30,
    },
    textData:{
        marginTop:10,
        marginHorizontal:30,
    }
})