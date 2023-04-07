import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, Linking, SafeAreaView, View } from 'react-native';
import { HomeStack, ProfileStack } from './stack';

const Drawer = createDrawerNavigator();

export const MyDrawer =() => {
    return (
  <Drawer.Navigator screenOptions={{headerShown: false}}
    drawerContent={(props) => {
      return (
        <SafeAreaView style={{flex:1, paddingTop: 20, backgroundColor: '#99f6e4'}}>  
          <View style={{justifyContent: 'center', alignItems:'center', height:140 }}>
            <Image
              style={{width: 100, resizeMode: 'contain'}}
              source={require("./wildcat.png")}
              // source={require("../assets/photos/wildcat.png")}
              
            />  
          </View>
            <DrawerItemList {...props} />
            <DrawerItem 
              label="More Info" 
              onPress={()=> Linking.openURL("https://www.dndbeyond.com")}
              icon={() => (
                <Ionicons name="infomration" size={22} />
              )}
            />
        </SafeAreaView>
      )
      }}
  
  >
        <Drawer.Screen name="HomeStack" component={HomeStack} options={{
          title: "Home",
          drawerIcon: () => <Ionicons name="home" size={22} />
          }} />

        <Drawer.Screen name="ProfilesStack" component={ProfileStack} options={{
          title: "profiles",
          drawerIcon: () => <MaterialCommunityIcons name="face-man-profile" size={22} />
          }} />
  </Drawer.Navigator> 
    )
}