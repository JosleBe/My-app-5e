import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import Imagen from '../../../../assets/placeholder.png'
const Introduce = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}> Introsucing Airbnb Aun Pair</Text>
                <Text style={{ marginTop: 8, width: 300 }}>Choose a family home with a qualifed childcare provider</Text>
            </View>

            <Image style={styles.img} source={Imagen} />
            <View style={{ justifyContent: 'center', alignItems: 'center', top: -30 }}>
                <Button title={"EXPLORE HOMES"}
                    titleStyle={{ fontSize: 17, fontWeight: '600', color: 'black' }}
                    buttonStyle={{ width: 230, height: 50, backgroundColor: 'white', borderColor: 'black', borderWidth: 2 }}
                    iconRight
                    icon={<Icon name="arrow-right" type="feather" size={20} color="black" />}
                    onPress={()=> navigation.navigate("HomeScreen")}
                />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        padding: 10
    },
    info: {
        width: '80%'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    img: {
        width: '100%',
        marginTop: 12
    }

})
export default Introduce
