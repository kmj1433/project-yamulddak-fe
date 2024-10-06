import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

const SignUp_3 = () => {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        placeholderTextColor={'#929292'}
        onPress={() =>
          navigation.goBack()
        }
        style={styles.topContainer}
      >
        <Feather name='arrow-left' size={24} />
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: '900' }}>동네를 설정해주세요.</Text>
        <View style={[styles.searchContainer, { borderColor: isFocused ? '#9B27FF' : '#9DA1AD' }]}>
          <TextInput
            placeholder='검색'
            placeholderTextColor={'#929292'}
            onFocus={handleFocus}
            style={{
              flex: 1,
            }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
          >
            <Feather name='search' size={18} color={'#929292'} style={{ alignItems: 'flex-end' }} />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', marginTop: 32 }}>
          <Text style={{ fontSize: 16, color: '#646464', textAlign: 'center' }}>현재 위치로 동네를 받아오지 못했어요.{'\n'}내 동네 이름으로 검색해보세요!</Text>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#9B27FF', marginTop: 6 }}>내 동네 이름 검색하기</Text>
        </View>

        <View style={styles.nextContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            hitSlop={10}
            onPress={() => {
              navigation.push('SignUp_4');
            }
            }
          >
            <Text style={styles.nextText}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp_3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    height: 56,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  searchContainer: {
    width: '90%',
    padding: 12,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#9DA1AD',
    borderRadius: 12,
    marginTop: 20,
  },

  nextContainer: {
    width: '80%',
    backgroundColor: '#9B27FF',
    padding: 16,
    borderRadius: 8,
    position: 'absolute',
    bottom: 20,
  },
  nextText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})