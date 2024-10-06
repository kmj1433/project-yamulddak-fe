import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

const PostDetail = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.topContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.goBack()
            }
          >
            <Feather name='arrow-left' size={24} />
          </TouchableOpacity>
          <Feather name='more-vertical' size={24} />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <Image style={styles.postImage} source={require('../assets/images/largeGreenOnion.jpg')} />
        <View style={styles.postTitleContainer}>
          <View style={{ padding: 16 }}>
            <View style={[styles.postTagContainer, { backgroundColor: '#EEEEEE' }]}>
              <Text style={styles.postTag}>
                자주 쓰이는 재료
              </Text>
            </View>
            <View style={styles.postContainer}>
              <Text style={{ fontSize: 18, fontWeight: '800' }}>
                대파
              </Text>
              <Text style={{ fontSize: 16, marginTop: 8 }}>
                한 줄기씩 나눠가져요
              </Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 14, color: '#616161', marginTop: 8 }}>
                모집인원 1/3
                &nbsp;&nbsp;•&nbsp;&nbsp;
                연남동
              </Text>
              <Text style={{ fontSize: 14, color: '#616161', marginTop: 8 }}>
                댓글 2개
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.storageContainer}>

          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: '900', color: '#52B400' }}>보관법</Text>
            <Text style={{ fontSize: 16, marginTop: 16, lineHeight: 24 }}>
              1. 씻지 않은 대파를 세 부분으로 자른다.{'\n'}
              2. 밀봉 용기에 키친타올이나 신문지를 넣는다.{'\n'}
              3. 1~2cm 간격으로 가지런하게 넣고 세워 보관한다.
            </Text>
          </View>
        </View>
        <View style={styles.profileContainer}>
          <Image style={styles.profileImage} source={require('../assets/images/profile1.png')} />
          <View style={{ marginLeft: 20, justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '900' }}>양파쿵야대장</Text>
            <View style={{ flexDirection: 'row', marginTop: 4, alignItems: 'center' }}>
              <Text style={{ fontSize: 14, marginRight: 4 }}>거래횟수</Text>
              <Text style={{ fontSize: 14, fontWeight: '600' }}>2회</Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#52B400', marginTop: -4 }}>
              <Text style={{ fontSize: 16, fontWeight: '900', color: '#52B400' }}>친환경 포인트</Text>
            </View>
            <Text style={{ fontSize: 14, marginTop: 2 }}>애송이 버섯</Text>
          </View>
        </View>
        <View style={{ padding: 16, borderBottomWidth: 2, borderBottomColor: '#EEEEEE' }}>
          <Text style={{ fontSize: 16, lineHeight: 20 }}>대파를 너무 많이 팔아서 한 줄기씩만 나눠 살 사람 구해요. 댓글로 남겨주세요.</Text>
        </View>

        {/* CoPurchase Information */}
        <View style={{ padding: 16, borderBottomWidth: 2, borderBottomColor: '#EEEEEE' }}>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.midTitle}>공동구매 위치</Text>
              <Feather name='help-circle' size={20} color={'#D1D1D1'} />
            </View>
            <Image style={styles.locationImage} source={require('../assets/images/location.png')} />
            <Text style={{ fontSize: 16, marginTop: 8 }}>서울시 마포구 상수동 근처</Text>
          </View>
          <View style={{ marginTop: 28 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.midTitle}>공동구매 방식</Text>
              <Feather name='help-circle' size={20} color={'#D1D1D1'} />
            </View>
            <Text style={{ fontSize: 16, marginTop: 8 }}>참여자와 조율해요.</Text>
          </View>
          <View style={{ marginTop: 28 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.midTitle}>공동구매 날짜</Text>
              <Feather name='help-circle' size={20} color={'#D1D1D1'} />
            </View>
            <Text style={{ fontSize: 16, marginTop: 8 }}>2024.07.03(수) ~ 07.06(토)</Text>
          </View>
        </View>

        <View style={{ padding: 16 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, marginRight: 4 }}>댓글</Text>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>2</Text>
          </View>
          <View style={{ marginVertical: 16, flexDirection: 'row' }}>
            <Image style={styles.profileImage} source={require('../assets/images/profile2.jpg')} />
            <View style={{ marginLeft: 12 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#255100' }}>야채가게사장</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 12, marginRight: 4 }}>거래횟수</Text>
                <Text style={{ fontSize: 12, fontWeight: '600', marginRight: 12 }}>신규</Text>
                <Text style={{ fontSize: 12, color: '#929292' }}>10시간 전</Text>
              </View>
              <Text style={{ fontSize: 16, marginTop: 8 }}>일요일에도 거래되나요?</Text>
              <Text style={{ fontSize: 14, color: '#929292', marginTop: 8 }}>답글 쓰기</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Feather name='more-vertical' size={24} />
            </View>
          </View>
          <View style={{ marginVertical: 16, flexDirection: 'row' }}>
            <Image style={styles.profileImage} source={require('../assets/images/profile3.jpg')} />
            <View style={{ marginLeft: 12 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#255100' }}>과일러버 </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 12, marginRight: 4 }}>거래횟수</Text>
                <Text style={{ fontSize: 12, fontWeight: '600', marginRight: 12 }}>3회</Text>
                <Text style={{ fontSize: 12, color: '#929292' }}>14시간 전</Text>
              </View>
              <Text style={{ fontSize: 16, marginTop: 8 }}>두 줄기도 되나요?</Text>
              <Text style={{ fontSize: 14, color: '#929292', marginTop: 8 }}>답글 쓰기</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Feather name='more-vertical' size={24} />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.commentButton}
        >
          <Feather name='message-circle' size={22} />
          <Text style={{ fontSize: 18, fontWeight: '900', textAlign: 'center', marginLeft: 5 }}>댓글 달기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.participateButton}
        >
          <Text style={{ fontSize: 18, fontWeight: '900', textAlign: 'center' }}>참여 신청하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PostDetail

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

  postTitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  postTagContainer: {
    backgroundColor: '#EEEEEE',
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginLeft: -2,
  },
  postTag: {
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  postContainer: {
    marginTop: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
  },

  storageContainer: {
    backgroundColor: '#EBFFDB',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  profileContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  profileImage: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 50,
  },

  midTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#255100',
    marginRight: 8,
  },
  locationImage: {
    width: 360,
    height: 80,
    marginTop: 8,
  },

  buttonContainer: {
    position: 'absolute',
    width: '90%',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
  commentButton: {
    width: 120,
    height: 56,
    backgroundColor: '#EFEFEF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 16,
  },
  participateButton: {
    width: 230,
    height: 56,
    marginLeft: 10,
    backgroundColor: '#76FF03',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 16,
  },
})