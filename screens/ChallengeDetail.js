import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

const ChallengeDetail = () => {
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
                <Image style={styles.postImage} source={require('../assets/images/challenge1.jpg')} />
                <View style={styles.postTitleContainer}>
                    <View style={{ padding: 16 }}>
                        <View style={[styles.postTagContainer, { backgroundColor: '#EEEEEE' }]}>
                            <Text style={styles.postTag}>
                                지속가능한 식단
                            </Text>
                        </View>
                        <View style={styles.postContainer}>
                            <Text style={{ fontSize: 18, fontWeight: '800' }}>
                                토요일에 냉장고 털기
                            </Text>
                            <Text style={{ fontSize: 16, marginTop: 8, lineHeight: 20 }}>
                                냉장고에 있는 재료를 활용하여 음식을 만들어 먹어요! 챌린지는 한 달동안 진행되며, 베스트 후기로 당첨되면 친환경 포인트를 추가적으로 드려요 :)
                            </Text>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 14, color: '#616161', marginTop: 8 }}>
                                참여인원 7명
                            </Text>
                            <Text style={{ fontSize: 14, color: '#616161', marginTop: 8 }}>
                                댓글 2개
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.storageContainer}>

                    <View style={{ padding: 16 }}>
                        <Text style={{ fontSize: 16, fontWeight: '900', color: '#52B400' }}>참여방법</Text>
                        <Text style={{ fontSize: 16, marginTop: 16, lineHeight: 24 }}>
                            1. 냉장고에 있는 재료를 준비한다.{'\n'}
                            2. 매주 토요일에 요리를 해먹는다.{'\n'}
                            3. 댓글에 후기를 남긴다.
                        </Text>
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
                            <Text style={{ fontSize: 16, marginTop: 8 }}>파스타 해먹었어요!</Text>
                            <Text style={{ fontSize: 14, color: '#929292', marginTop: 8 }}>답글 쓰기</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Feather name='more-vertical' size={24} />
                        </View>
                    </View>
                    <View style={{ marginVertical: 16, flexDirection: 'row' }}>
                        <Image style={styles.profileImage} source={require('../assets/images/profile3.jpg')} />
                        <View style={{ marginLeft: 12 }}>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: '#255100' }}>과일러버</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 12, marginRight: 4 }}>거래횟수</Text>
                                <Text style={{ fontSize: 12, fontWeight: '600', marginRight: 12 }}>3회</Text>
                                <Text style={{ fontSize: 12, color: '#929292' }}>14시간 전</Text>
                            </View>
                            <Text style={{ fontSize: 16, marginTop: 8 }}>오랜만에 집밥 해먹었는데, 너무 좋았어요.</Text>
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
                    <Text style={{ fontSize: 18, fontWeight: '900', textAlign: 'center' }}>참여하기</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ChallengeDetail

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