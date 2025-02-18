import { TemperatureColors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background: {
        backgroundColor: TemperatureColors.background,
        flex: 1,
    },

    indexContainer: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    },

    temperatureContainer: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center",
    },

    degreesText: {
        fontSize: 120,
        fontWeight: '100',
      },

    TemperatureTitle: { 
        fontSize: 24, 
        fontWeight: "bold", 
        marginBottom: 20,
        fontFamily: "Inter",
        color: TemperatureColors.textPrimary,
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 20,
      },

    floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        elevation: 3
    },
    floatingButtonText: {
        color: TemperatureColors.textPrimary,
        fontSize: 20,
        fontWeight: 'bold',
        width: 25,
        height: 25
    },
    positionLeft: {
        left: 20,
    },
    positionRight: {
        right: 20,
    },

    screenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    screemButton: {
        backgroundColor: "#333",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        elevation: 5,
    },

    screenButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
})
