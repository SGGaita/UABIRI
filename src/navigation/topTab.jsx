import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    View,
    Text,
    StyleSheet
  } from 'react-native'
  import {COLORS} from '../constants'

const Tab = createMaterialTopTabNavigator();

export const TopTab = ()=>{

    function QueryScreen() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
          </View>
        );
      }
      
      function TransactionsScreen() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
          </View>
        );
      }  

  return (
    <Tab.Navigator style={styles.tabs}>
      <Tab.Screen name="Query Payment" component={QueryScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
    </Tab.Navigator>
  );


 
}

const styles = StyleSheet.create({
tabs:{
    flex: 4,
    backgroundColor: COLORS.white,
    justifyContent: "flex-start",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
}
    
})