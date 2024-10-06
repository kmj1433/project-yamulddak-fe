import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';

const SignUp_4 = () => {
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

      <View style={{ flex: 1, alignItems: 'center', marginTop: 24 }}>
        <Image style={styles.profileImage} source={require('../assets/images/profile-default.png')} />
        <TouchableOpacity
          activeOpacity={0.8}
        >
          <View style={styles.cameraImage}>
            <Entypo name='camera' size={16} color={'#9DA1AD'} style={{ padding: 5 }} />
          </View>
        </TouchableOpacity>
        <View style={[styles.nameContainer, { borderColor: isFocused ? '#9B27FF' : '#9DA1AD' }]}>
          <TextInput
            placeholder='닉네임'
            placeholderTextColor={'#929292'}
            onFocus={handleFocus}
            hitSlop={10}
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 14,
            }}
          />
        </View>
        <Text style={{ marginTop: 8, color: '#646464' }}>닉네임을 입력해주세요!</Text>

        <View style={styles.nextContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            hitSlop={10}
            onPress={() => {
              navigation.push('Bottom');
            }
            }
          >
            <Text style={styles.nextText}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp_4

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  topContainer: {
    height: 56,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  profileImage: {
    width: 100,
    height: 100,
  },
  cameraImage: {
    marginLeft: 76,
    marginTop: -30,
    borderWidth: 1,
    borderColor: '#9DA1AD',
    borderRadius: 20,
    backgroundColor: '#F4F6FA'
  },

  nameContainer: {
    width: '76%',
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