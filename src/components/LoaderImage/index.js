import React, { useState } from 'react'
import { View, Image } from 'react-native'
import LoaderView from '../LoaderView'


const LoaderImage = (props) => {
    console.log('props.source')
    console.log(props.source)
    const [isImageLoading, setIsImageLoading] = useState(false)
    return (
        <View>
            <Image
                source={{ uri: props.source }}
                style={props.style}
                onLoadStart={() => setIsImageLoading(true)}
                onLoadEnd={() => setIsImageLoading(false)}
            />
            {
                isImageLoading && <LoaderView />
            }
        </View>
    )
}

export default LoaderImage
