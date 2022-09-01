import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { appColor } from '../../constants/colors'

const LoaderView = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="small"
                color={appColor.appColorGreen} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.7,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default LoaderView
