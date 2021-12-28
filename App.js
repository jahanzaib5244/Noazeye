import React from 'react'
import { View, StatusBar } from 'react-native'
import Navigation from './src/navigation/Navigation'
import { Provider } from 'react-redux';
import Store from './src/config/Store'

export default function App() {
  return (
    <Provider store={Store}>
            <StatusBar backgroundColor='#000000' barStyle='light-content' />

      <Navigation />
    </Provider>
  )
}
