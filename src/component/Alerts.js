import React from 'react'
import { View, Text , StyleSheet } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';

import { Colors, size } from '../config/Utils';

export  function SuccessAlerts({title,msg,confirm,showAlert}) {
    return (
        <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={title}
        message={msg}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        // showCancelButton={true}
        showConfirmButton={true}
        confirmText="OK"
        contentContainerStyle={styles.alertContainer}
        alertContainerStyle={styles.alertParentContainer}
        confirmButtonStyle={styles.confirmButton}
        confirmButtonColor={Colors.success}
        onConfirmPressed={()=>confirm()}
      />
    )
}

const styles = StyleSheet.create({
    confirmButton:{
        width:size.width20,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    alertParentContainer:{
        flex:1
    },
    alertContainer:{
        // height:size.height20,
        minHeight:size.height20,
        width:size.width70,
        borderRadius:15
    }
})
