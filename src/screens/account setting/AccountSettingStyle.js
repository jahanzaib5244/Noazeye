import { StyleSheet } from 'react-native';
import { Colors, font, size } from '../../config/Utils';


export const AccountSettingStyle = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: Colors.primary
  },
  uppercontainer: {
    flex: 2,
    minHeight: size.height20,
    alignItems: 'center',
    justifyContent: 'center'

  },
  InputFieldContainer: {
    flex: 8,
    elevation: 4,
    minHeight: size.height70,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 80
  },
  image: {

    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    resizeMode: 'cover',

  },
  imageBtn: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
   elevation:4,
   justifyContent:'center',
   alignItems:'center'
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
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 3,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
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