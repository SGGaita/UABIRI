import { View, TextInput } from 'react-native'
import React from 'react'
import {FONTS,COLORS,SIZES} from '../constants'

export const SearchBar = (props) => {
  return (
    <View style={{ marginTop: SIZES.padding * 1 }}>
          <TextInput style={{
            marginVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            border: COLORS.grey,
            borderWidth: 1,
            borderRadius: 20,
            height: 40,
            color: COLORS.black,
            ...FONTS.body3
          }}
            placeholder="Search"
            placeholderTextColor={COLORS.secondary}

            selectionColor={COLORS.black}
            value={props.searchText}
            onChangeText={text => {
              props.setSearchText(text)

            }}
          />
        </View>
  )
}
