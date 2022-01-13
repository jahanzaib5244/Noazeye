import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, ActivityIndicator } from 'react-native'
import {useSelector} from 'react-redux'

import { size, Colors, font } from '../config/Utils'

export default function Dropdown({ select,customstyle }) {
    const [show, setshow] = useState(false)
    const [selected, setselected] = useState('')
      const Companies = useSelector(state => state.AuthReducer.Companies)
 

    const SelectedOption = (item) => {
        setselected(item.business_name)
        setshow(false)

        select(item.business_id)
    }
  
        return (
            <View>
                <TouchableOpacity style={[styles.Input,customstyle]} onPress={() => setshow(true)} >
                    <Text style={styles.text}>Select Company Name</Text>
                    <View style={styles.textinput} >
                        <Text>{selected == '' ? 'Select Company...' : selected}</Text>
                    </View>

                </TouchableOpacity>
                <Modal
                    style={styles.modalstyle}
                    animationType='fade'
                    transparent={true}
                    visible={show}
                    onRequestClose={() => {

                        setshow(!show);
                    }}
                >
                    <TouchableOpacity style={styles.ModalView} onPress={() => setshow(!show)}>
                        <View style={styles.inner}>
                            {Companies.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={styles.options} onPress={() => SelectedOption(item)}>
                                        <Text style={styles.optionText}>{item.business_name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>

        )

}
export const LoadingBussiness=({customstyle})=>{
    return(
        <TouchableOpacity style={[styles.Input,customstyle]} >
        <Text style={styles.text}>Select Company Name</Text>
        <View style={styles.textinput} >
         <ActivityIndicator size='small' color={Colors.black} />
        </View>

    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    modalstyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ModalView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inner: {
        padding: 10,
        width: "85%",
        minHeight:size.height50,
        borderRadius: 20,
        marginHorizontal: 30,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'rgba(100,100,100,0.3)'
    },
    options: {
        width: '100%',
        padding: 5,
        paddingVertical: 15,
        // elevation: 0.3,
        borderBottomWidth: 0.7,

        borderColor: 'rgba(100,100,100,0.5)',
        // backgroundColor:'red'
    },
    dropdownSelector: {

        height: 80,
        // backgroundColor:'green',
        marginVertical: 5,
        marginHorizontal: 30,
        borderRadius: 10,
        elevation: 1,

    },
    Input: {
        marginHorizontal: 30,
        // marginBottom: 28,
        backgroundColor: Colors.primary,
        elevation: 6,
        shadowColor:Colors.primary,
        borderRadius: 10,
        padding: 10,
    },
    text: {
        paddingLeft: 15,
        color: Colors.black,
        fontSize: font.h3,
        fontWeight: '700',
        letterSpacing: 1
    },
    textinput: {

        marginVertical: 5,
        marginHorizontal: 5,
        fontSize: font.h3,
        padding: 5,
        paddingHorizontal: 10,
        marginTop: 5
    },
    optionText: {
        color: Colors.black,
        fontSize: font.h3
    }
})
