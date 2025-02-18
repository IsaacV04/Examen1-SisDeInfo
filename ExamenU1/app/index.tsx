import { View, Text } from 'react-native'
import React from 'react'
import TemperatureApp from '@/components/TemperatureApp'
import { globalStyles } from '@/styles/globalStyles'
import ColorScreenApp from '@/components/ColorScreenApp'

const index = () => {
  return (
    <View style={globalStyles.indexContainer}>
      {/* <TemperatureApp /> */}
      {/* <ColorScreenApp /> */}
    </View>
  )
}

export default index