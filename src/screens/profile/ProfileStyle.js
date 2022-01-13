import { StyleSheet } from 'react-native';
import { Colors, font, size } from '../../config/Utils';


export const ProfileStyle = StyleSheet.create({
    root: {
        flexGrow: 1,
        backgroundColor: Colors.primary
    },
    upperContainer: {
        flex: 1,
        minHeight: size.height30,
      
    },
    lowerContainer: {
        flex: 3,
        elevation:4,
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
        color: Colors.black,
        fontSize: 22,
        alignSelf:'center',
        marginTop:6,
        fontWeight:'700',
        textTransform:'capitalize'
    },
    cardImage:{
        height:120,
        width:120,
        borderRadius: 120/2,
     
    },
    cardImageContainer:{
        height:120,
        marginTop:24,
        width:120,
        overflow:'hidden',
        borderRadius: 120/2,
        alignSelf:'center',
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
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