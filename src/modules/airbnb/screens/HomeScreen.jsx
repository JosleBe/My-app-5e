import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Imagen from '../../../../assets/placeholder.png'
import { Icon } from 'react-native-elements'
const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <Image style={styles.img} source={Imagen} />
                <View style={{ position: 'absolute', end: 10, top: 10 }}>
                    <Icon name='heart' type='antdesign' size={19} color="black" />
                </View>
                <View style={{ position: 'absolute', bottom: 12, left: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>
                        San Diego Cl.
                    </Text>
                </View>
            </View>
            <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'start', marginTop: 12, marginLeft: 12 }}>MEET AU PAIR LISA</Text>
            <View style={{ justifyContent: 'center', alignItems: 'start', margin: 12 }}>
                <View style={{ height: 140, width: '100%', borderWidth: 1, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }} >
                    <Image source={Imagen}style={{borderRadius: 90, height: 90, width:90}}/>
                    <Text style={{width: 120}}>Lorem ipsum dolor sit, amet consectetur adipisicing esimos!</Text>
                </View>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    img: {
        width: '100%'
    }
})
export default HomeScreen
