import {useState, useLayoutEffect} from "react";
import {View, StyleSheet, Button, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {HeaderBackButton} from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const NewEventScreen = props = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [alert, setAlert] = useState({
        isVisible: false,
        msg: ''
    })

    const navigation = useNavigation()
    useLayoutEffect( ()=> {
        navigation.setOptions({
            headerTitle: 'add new event',
            headerLeft: () => (
                <HeaderBackButton
                    tintColor="white"
                    label="Back"
                    onPress={()=> navigation.goBack()}
                />
            )
        })
    }, [])

const handleAddEvent = async() => {
    const d = date.toISOString().slice(0, 10)
    console.log(d)

    const data = {
        name,
        description,
        date: d
    }

    const response = await fetch('http://10.0.0.138:8000/api/events/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    const res = await response.json()
    setAlert({ isVisible: true, msg: 'Event added' }  )

}   
    return(
        
        <View style={styles.screen} >

            {alert.isVisible &&  <Text>{alert.msg}</Text> }

            <Text style={styles.inputTitle} > Event Name </Text>
            <TextInput
                title="Event Name"
                value={name}
                onChangeText={setName}
                placeholder="Event Name"
                style={styles.input}
            />
            <Text style={styles.inputTitle}> Event Description </Text>
            <TextInput
                title="Event Description"
                value={description}
                onChangeText={setDescription}
                placeholder="Event Description"
                multiline={true}
                style={styles.input}
            />
            <Text style={styles.inputTitle}> Event Date </Text>
            <TextInput
                title="Event Date"
                value={date.toLocaleDateString()}
                onChangeText={setDate}
                placeholder="Event Date"
                style={styles.input}
            />

            <Button title="Create Event" onPress={handleAddEvent} />
        </View>
    );
}
StyleSheet
const styles = StyleSheet.create ({

    screen: {
        padding: 20,
    },

    inputTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 10,
    },


})



export default NewEventScreen;