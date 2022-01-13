import {StyleSheet} from 'react-native';
import { size ,Colors} from '../../config/Utils';


export  const UpdatePasswordStyle = StyleSheet.create({
   root:{
       flexGrow:1,
       minHeight:size.height100,
       backgroundColor:Colors.primary
   },
   upperContaier:{
       flex:0,
       minHeight:size.height10 -40
   },
   lowerContainer:{
       flex:9,
       elevation:4,
       backgroundColor:Colors.white,
       borderTopLeftRadius:80
   },
   oldPassword:{
    marginHorizontal:20,
    marginTop:50,
   },
   newPassword:{
      marginHorizontal:20,
      marginTop:10 
   },
   Btn:{
       marginHorizontal:20,
       marginTop:30
   },
   error: {
    color: Colors.danger,
    paddingLeft: 30,
    marginTop: 0
},
})