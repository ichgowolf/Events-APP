import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";
import EventList from "../components/event-list";
import { useEffect, useState } from "react";

const HomeScreen = () => {
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false)

    const handleRefresh = () => {
        console.log('refreshing...')
        setRefresh(prevState => !prevState)
    }
    
    useEffect(() => {
        fetchData()
    }, [refresh])

    const fetchData = async () => {
        const response = await fetch('URL/api/events/')
        const data = await response.json()
        setData(data)
    }

    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            {/* <EventList/> */}
            <Button title="Add New Event" onPress={() => navigation.navigate('New Event')} />
            <EventList data={data} onRefresh={handleRefresh} />
        </View>

    );
}

const styles = StyleSheet.create ({
    screen: {
        padding: 20,
    }
})

export default HomeScreen;

