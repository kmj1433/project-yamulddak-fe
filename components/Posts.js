import { View, Text } from 'react-native'
import React from 'react'
import PostItem from './PostItem'

const postInfo = [
  {
    postTag: '제철 재료',
    postType: '참외',
    postTitle: '참외..! 필요한 만큼만',
    postPeople: '모집인원 2/3',
    postLocation: '상수동',
    postImage: require('../assets/images/logo.png')
  },
  {
    postTag: '자주 쓰는 재료',
    postType: '대파',
    postTitle: '한 줄기씩 나눠가져요',
    postPeople: '모집인원 1/3',
    postLocation: '연남동',
    postImage: require('../assets/images/largeGreenOnion.jpg')
  },
  {
    postTag: '특색 있는 재료',
    postType: '바질',
    postTitle: '파스타 맛나게 먹어요',
    postPeople: '모집인원 1/2',
    postLocation: '상수동',
    postImage: require('../assets/images/basil.jpg')
  },
  {
    postTag: '마트 특가',
    postType: '당근',
    postTitle: '국내산 당근 떨이 공구해요',
    postPeople: '모집인원 1/4',
    postLocation: '합정동',
    postImage: require('../assets/images/logo.png')
  },
  {
    postTag: '자주 쓰는 재료',
    postType: '양파',
    postTitle: '양파쿵야들 모여라',
    postPeople: '모집인원 1/4',
    postLocation: '망원동',
    postImage: require('../assets/images/onion.jpg')
  },
]

const Posts = () => {
  return (
    <View>
      {postInfo.map((data, index) => {
        return (
          <PostItem data={data} key={index} />
        );
      })}
    </View>
  )
}

export default Posts