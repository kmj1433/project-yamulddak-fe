import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

const Community = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <View style={styles.topContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder='검색어를 입력하세요'
              placeholderTextColor='#919191'
              style={{ marginLeft: 12 }}
            />
            {/* <Text style={{ marginLeft: 12, color: '#919191' }}>검색어를 입력하세요</Text> */}
          </View>
          <TouchableOpacity>
            <Feather name='search' size={24} />
          </TouchableOpacity>
        </View>

        <View style={{ padding: 16 }}>
          <View style={styles.challengeTop}>
            <Text style={{ fontSize: 20, fontWeight: '900' }}>야물딱진 챌린지</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.push('Challenge')
              }
            >
              <Feather name='chevron-right' size={24} />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 16, marginTop: 4 }}>챌린지에 성공하면 친횐경 포인트가 2배!</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={{ flexDirection: 'row', marginTop: 12 }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.push('ChallengeDetail')
                }
              >
                <ImageBackground style={styles.challengeImage}
                  source={require('../assets/images/challenge1.jpg')}
                  imageStyle={{ borderRadius: 16 }}
                >
                  <View style={styles.overlay} />
                  <Text style={styles.challengeImageText}>토요일에{'\n'}냉장고 털기</Text>
                </ImageBackground>
              </TouchableOpacity>

              <ImageBackground style={styles.challengeImage}
                source={require('../assets/images/challenge2.jpg')}
                imageStyle={{ borderRadius: 16 }}
              >
                <View style={styles.overlay} />
                <Text style={styles.challengeImageText}>장바구니{'\n'}사용하기</Text>
              </ImageBackground>

              <ImageBackground style={styles.challengeImage}
                source={require('../assets/images/challenge3.jpg')}
                imageStyle={{ borderRadius: 16 }}
              >
                <View style={styles.overlay} />
                <Text style={styles.challengeImageText}>도시락 싸기</Text>
              </ImageBackground>

              <ImageBackground style={styles.challengeImage}
                source={require('../assets/images/challenge4.jpg')}
                imageStyle={{ borderRadius: 16 }}
              >
                <View style={styles.overlay} />
                <Text style={styles.challengeImageText}>도정이 적은 재료{'\n'}도전하기</Text>
              </ImageBackground>
            </View>
          </ScrollView>
        </View>

        {/* review */}
        <View>
          <View style={{ marginTop: 24, paddingHorizontal: 16 }}>
            <View style={styles.challengeTop}>
              <Text style={{ fontSize: 20, fontWeight: '900' }}>실시간 후기</Text>
              <Feather name='chevron-right' size={24} />
            </View>
            <Text style={{ fontSize: 16, marginTop: 4 }}>후기를 작성하면 친환경 포인트가 2배!</Text>
          </View>

          <View style={styles.reviewContainer}>
            <View>
              <View style={styles.reviewTagContainer}>
                <Text style={[styles.reviewTag, { backgroundColor: '#EEEEEE' }]}>제철재료</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: '800', marginTop: 8 }}>참외</Text>
                <Text style={{ fontSize: 16, marginTop: 5 }}>신선해요</Text>
                <Text style={{ fontSize: 14, color: '#616161', marginTop: 5 }}>홈플러스 합정점</Text>
              </View>
            </View>
            <View style={styles.reviewImage}>
              <Image
                source={require('../assets/images/logo.png')}
                style={{ width: '100%', height: '100%', borderRadius: 5 }}
              />
            </View>
          </View>

          <View style={styles.reviewContainer}>
            <View>
              <View style={styles.reviewTagContainer}>
                <Text style={[styles.reviewTag, { backgroundColor: '#CBFFA0' }]}>자주 쓰는 재료</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: '800', marginTop: 8 }}>대파</Text>
                <Text style={{ fontSize: 16, marginTop: 5 }}>저렴했어요</Text>
                <Text style={{ fontSize: 14, color: '#616161', marginTop: 5 }}>롯데슈퍼 마포점</Text>
              </View>
            </View>
            <View style={styles.reviewImage}>
              <Image
                source={require('../assets/images/largeGreenOnion.jpg')}
                style={{ width: '100%', height: '100%', borderRadius: 5 }}
              />
            </View>
          </View>

          <View style={styles.reviewContainer}>
            <View>
              <View style={styles.reviewTagContainer}>
                <Text style={[styles.reviewTag, { backgroundColor: '#CBFFA0' }]}>마트 특가</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: '800', marginTop: 8 }}>토마토</Text>
                <Text style={{ fontSize: 16, marginTop: 5 }}>친절했어요</Text>
                <Text style={{ fontSize: 14, color: '#616161', marginTop: 5 }}>하나로마트 서강점</Text>
              </View>
            </View>
            <View style={styles.reviewImage}>
              <Image
                source={require('../assets/images/logo.png')}
                style={{ width: '100%', height: '100%', borderRadius: 5 }}
              />
            </View>
          </View>
        </View>
      </ScrollView >
    </SafeAreaView >
  )
}

export default Community

const styles = StyleSheet.create({
  container: {
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
  searchContainer: {
    width: '88%',
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    backgroundColor: '#EFEFEF'
  },

  challengeTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  challengeImage: {
    width: 188,
    height: 180,
    padding: 20,
    marginRight: 8,
  },
  challengeImageText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFFFFF',
    lineHeight: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 16,
  },

  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    padding: 16,
  },
  reviewTagContainer: {
    backgroundColor: '#EEEEEE',
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginLeft: -2,
  },
  reviewTag: {
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  reviewImage: {
    width: 100,
    height: 100,
    backgroundColor: '#F4F4F4',
    borderRadius: 5,
    justifyContent: 'center',
  }
})