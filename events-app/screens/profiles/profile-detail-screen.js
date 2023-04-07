import 'react-native-gesture-handler';
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import { useLayoutEffect } from 'react';
import {HeaderBackButton} from "@react-navigation/elements";

const ProfileDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const {profileId} = route.params

    useLayoutEffect( ()=> {
        navigation.setOptions({
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
            <Text style={{fontSize: 20}}>Profile id: {profileId} </Text>
        </View>

    );
}

const styles = StyleSheet.create ({
    screen: {
        padding: 20,
    }
})

export default ProfileDetailScreen;