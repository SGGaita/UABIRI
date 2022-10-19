import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS, COLORS, SIZES } from '../constants'


export const SearchBar = (props) => {


  const closeCancel = () => {
    props.setSearchText("")
  }


  return (

    <View style={{ flexDirection: "row", marginTop: SIZES.padding * 1 }}>

      <TextInput style={{
        marginVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        border: COLORS.grey,
        borderWidth: 1,
        borderRadius: 20,
        height: 40,
        color: COLORS.black,
        ...FONTS.body3,
        flex: 3,
      }}
        placeholder={props.placeholder}
        placeholderTextColor={COLORS.secondary}

        selectionColor={COLORS.black}
        value={props.searchText}
        onChangeText={text => {
          props.setSearchText(text.toUpperCase())

        }}
      />
      {props.searchText != "" &&
        <TouchableOpacity
          style={{
            flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding, height: 40
          }}
          onPress={closeCancel}
        >
          <Text style={{
            color: COLORS.blue,
            ...FONTS.body3, flex: 2, marginTop: 10
          }}>Clear</Text>
        </TouchableOpacity>
      }

    </View>
  )
}



