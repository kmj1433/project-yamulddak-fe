import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { useSignUp } from '../context/SignUpProvider';

const SignUp_3 = () => {
  const navigation = useNavigation();
  const { userInfo, setUserInfo } = useSignUp();

  const [isFocused, setIsFocused] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null); // 선택된 주소 상태

  const handleFocus = () => setIsFocused(true);

  // 선택 가능한 주소 목록 예시
  const addresses = [
    { address: '서울특별시 마포구 성미산로 51 (성산동)', postcode: '03967' },
    { address: '서울특별시 마포구 성미산로 55 (성산동)', postcode: '03967' },
    { address: '서울특별시 마포구 와우산로 94 (상수동)', postcode: '04066' },
  ];

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

        <View style={{ marginTop: 20 }}>
          {addresses.map((item, index) => (
            <View key={index} style={styles.listContainer}>
              <View>
                <Text>{item.address}</Text>
                <Text>{item.postcode}</Text>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    // 주소와 우편번호를 userInfo 상태에 업데이트하고 선택된 주소 설정
                    setUserInfo({
                      ...userInfo,
                      address: item.address,
                      address_postcode: item.postcode,
                    });
                    setSelectedAddress(item.address); // 선택된 주소 업데이트
                  }}
                  style={[
                    styles.selectButton,
                    selectedAddress === item.address && styles.selected // 선택된 주소일 경우 스타일 변경
                  ]}
                >
                  <Text style={[
                    styles.selectText,
                    selectedAddress === item.address && styles.selectedText // 선택된 주소일 경우 텍스트 스타일 변경
                  ]}>선택</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.nextContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            hitSlop={10}
            onPress={() => {
              navigation.push('SignUp_4');
            }}
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
  listContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  selectButton: {
    backgroundColor: '#EEDBFF',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: '#9B27FF',
  },
  selectText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#9B27FF',
  },
  selectedText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#FFFFFF',
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
