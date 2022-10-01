import react from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export const Home = () => {
  return (
    <View>
        <Text>Home</Text>
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo:{
      color: 'white',
      fontSize: 35,

  }
})


