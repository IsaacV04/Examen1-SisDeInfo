import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '@/styles/globalStyles'
import TemperatureButton from './TemperatureButtons';
import { TemperatureColors } from '@/constants/Colors';

const TemperatureApp = () => {

    const [degrees, setDegrees] = useState(20);

    const getTemperatureColor = () => {
        if (degrees < 15) return TemperatureColors.blue;
        if (degrees > 25) return TemperatureColors.red;
        return TemperatureColors.green;
      };

  return (
    <View >
      <Text style={globalStyles.TemperatureTitle}>TemperatureApp</Text>
      <Text style={[globalStyles.degreesText, { color: getTemperatureColor() }]}>
        {degrees}°
    </Text>

    <View style={globalStyles.buttonContainer}>
      <TemperatureButton label='+'
        onPress={() => setDegrees(degrees + 1)}
      />

      <TemperatureButton label='-'
        onPress={() => setDegrees(degrees - 1)}
        position='left'
      />
    </View>
    </View>
  )
}

export default TemperatureApp