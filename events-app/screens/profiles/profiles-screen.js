import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";


const ProfileScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <Text>profile screen</Text>
            <Button title="some profile" onPress={()=>navigation.navigate('Profile', {profileId: 1})}/>
        </View>

    );
}

const styles = StyleSheet.create ({
    screen: {
        padding: 20,
    }
})

export default ProfileScreen;