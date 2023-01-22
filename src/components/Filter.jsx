import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import { FONTS, COLORS, SIZES } from '../constants'

export const Filter = ({ onChangeText, placeholder }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => {
                        setSearchText(text);
                        onChangeText(text);
                    }}
                    value={searchText}
                    placeholder={placeholder}
                    placeholderTextColor='darkgrey'
                    selectionColor='black'
                    color='black'
                />
                {searchText.length > 0 && (
                    <TouchableOpacity style={styles.clearButton} onPress={() => {setSearchText('')}}>
                        <Text style={styles.clearButtonText}>Clear</Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        padding: 10,
        margin: 10,
      },
    input: {
        //marginVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        //paddingVertical: SIZES.padding * 1,
        border: COLORS.grey,
       // borderWidth: 1,
        borderRadius: 20,
        height: 40,
        color: COLORS.black,
        ...FONTS.body3,
        flex: 3,
    },
    clearButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    clearButtonText: {
        color: 'black',
    },
});
