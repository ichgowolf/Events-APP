import 'react-native-gesture-handler';
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import { useLayoutEffect } from 'react';
import {HeaderBackButton} from "@react-navigation/elements";

const EventDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const {eventId, name, description} = route.params

    useLayoutEffect( ()=> {
        navigation.setOptions({
            headerTitle: name,
            headerLeft: () => (
                <HeaderBackButton
                    tintColor="white"
                    label="Back"
                    onPress={()=> navigation.goBack()}
                />
            )
        })
    }, [])
    
    return (
        <View style={styles.screen}>
            <Text style={{fontSize: 20}}>Event Detial Screen for {eventId} </Text>
            <Text style={{fontSize: 14}}>{name}</Text>
            <Text style={{fontSize: 14}}>{description}</Text>
        </View>

    );
}

const styles = StyleSheet.create ({
    screen: {
        padding: 20,
    }
})

export default EventDetailScreen;