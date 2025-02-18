import React from 'react'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '@/styles/globalStyles'

const _layout = () => {

    const [] = useFonts({
        Inter: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf')
    })

  return (
    <SafeAreaView  style={globalStyles.background}>
        <Slot />

        <StatusBar style='light'/>
    </SafeAreaView>
  )
}

export default _layout