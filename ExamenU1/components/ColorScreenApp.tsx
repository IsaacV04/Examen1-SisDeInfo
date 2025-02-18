import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '@/styles/globalStyles'

const ColorScreenApp = () => {

    const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  const generateRandomColor = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
    setBackgroundColor(randomColor);
  };

  return (
    <View style={[globalStyles.screenContainer, { backgroundColor }]}>
      <Text style={globalStyles.TemperatureTitle}>ColorScreenApp</Text>
      <Pressable style={globalStyles.screemButton} onPress={generateRandomColor}>
        <Text style={globalStyles.screenButtonText}>Cambiar Color</Text>
      </Pressable>
    </View>
  )
}

export default ColorScreenApp;
