import React from 'react'
import { WebView } from 'react-native-webview'
const CreateMemberShip = () => {
    return (
        <WebView
            source={{ uri: 'https://google.com/' }}
            style={{ flex: 1 }}
        />
    )
}


export default CreateMemberShip
