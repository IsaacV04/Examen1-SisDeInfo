import {Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/globalStyles';

interface Props {
    label: string;
    onPress?: () => void;
    position?: "left" | "right";
}

export default function TemperatureButton({
    label,
    onPress,
    position = "right"
}: Props) {
  return (
         <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                globalStyles.floatingButton,
                position === 'right' ? globalStyles.positionRight : globalStyles.positionLeft,
                pressed ? { opacity: 0.7 } : {opacity: 1}
            ]}
          >
            <Text style={globalStyles.floatingButtonText}>{label}</Text>
          </Pressable>
  )
}