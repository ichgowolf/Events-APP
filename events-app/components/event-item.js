import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";

const EventItem = ({id, name, description, qrCode}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={() =>navigation.navigate("Event", {eventId: id, name, description})}>
            <View>
                <Text>{name}</Text>
                <Text>{description}</Text>
            </View>
            <Image
                style={{width: 50, height: 50}}
                source={{uri: qrCode}}
                />
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    }
})

export default EventItem;