import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

const MyAccount = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
        >
          <Feather name='settings' size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 8 }}>
        {/* Account Information */}
        <View style={styles.accountInfoContainer}>
          <Image style={styles.profileImage} source={require('../assets/images/profile1.png')} />
          <View style={{ marginLeft: 12, justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '900' }}>양파쿵야대장</Text>
            <Text style={{ fontSize: 14, color: '#ADADAD', marginTop: 4 }}>#onion_boss</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <View style={{ backgroundColor: '#EEEEEE', borderRadius: 4 }}>
              <Text style={styles.levelText}>친환경 레벨 : 애송이 버섯</Text>
            </View>
          </View>
        </View>

        {/* Point */}
        <View style={styles.recordContainer}>
          <Text style={{ fontSize: 18, fontWeight: '900' }}>이번 달의 기록</Text>
          <View style={[styles.pointContainer, { backgroundColor: '#EBFFDB' }]}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../assets/icons/ecoPoint.png')} style={{ width: 50, height: 50 }} />
              <View style={{ marginLeft: 24 }}>
                <Text style={{ fontSize: 24, fontWeight: '900', color: '#52B400' }}>640</Text>
                <Text style={{ fontSize: 16, marginTop: 4 }}>친환경 포인트</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', }}>
                <Feather name='chevron-right' size={24} style={{ color: '#255100' }} />
              </View>
              <View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 12 }}>
              <Feather name='arrow-up-right' size={16} />
              <Text style={{ fontSize: 12, fontWeight: '600', marginLeft: 6 }}>3%</Text>
              <Text style={{ fontSize: 12, marginLeft: 6 }}>지난 달보다 더 모았어요!</Text>
            </View>
          </View>

          <View style={[styles.pointContainer, { backgroundColor: '#FFFEDB' }]}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../assets/icons/savingPoint.png')} style={{ width: 50, height: 50 }} />
              <View style={{ marginLeft: 24 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 24, fontWeight: '900', color: '#E29500' }}>7200</Text>
                  <Text style={{ fontSize: 24, fontWeight: '600', color: '#E29500', justifyContent: 'center' }}> 원</Text>
                </View>
                <Text style={{ fontSize: 16, marginTop: 4 }}>절약한 금액</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', }}>
                <Feather name='chevron-right' size={24} style={{ color: '#E19500' }} />
              </View>
              <View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 12 }}>
              <Feather name='arrow-up-right' size={16} />
              <Text style={{ fontSize: 12, fontWeight: '600', marginLeft: 6 }}>10%</Text>
              <Text style={{ fontSize: 12, marginLeft: 6 }}>지난 달보다 더 모았어요!</Text>
            </View>
          </View>
        </View>

        {/* 다른 정보 */}
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: '900', marginBottom: 12 }}>공동 구매</Text>
          <View style={styles.allServiceContainer}>
            <Feather name='map-pin' size={24} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>우리 동네 정하기</Text>
          </View>
          <View style={styles.allServiceContainer}>
            <Feather name='shopping-bag' size={24} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>공동 구매 기록</Text>
          </View>
          <View style={styles.allServiceContainer}>
            <Feather name='calendar' size={24} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>공동 구매 일정</Text>
          </View>
          <View style={styles.allServiceContainer}>
            <Feather name='edit' size={24} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>공동 구매 리뷰</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MyAccount

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  topContainer: {
    height: 56,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  accountInfoContainer: {
    flexDirection: 'row',
    padding: 16,
    margin: 8,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 50,
  },
  levelText: {
    fontSize: 12,
    fontWeight: '600',
    padding: 6,
  },

  recordContainer: {
    padding: 16,
    marginTop: -8,
  },
  pointContainer: {
    marginTop: 12,
    padding: 18,
    borderRadius: 12,
  },

  allServiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  }
})