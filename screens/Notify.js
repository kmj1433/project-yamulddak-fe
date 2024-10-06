import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const Notify = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.headerText}>
                    <Text style={{ fontSize: 22, fontWeight: '900' }}>알림</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                        navigation.goBack()
                    }
                >
                    <Feather name='arrow-left' size={24} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, color: '#808080' }}>편집</Text>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 8 }}>
                <View style={[styles.notiContainer, { backgroundColor: '#EBFFDB' }]}>
                    <View style={{ alignItems: 'flex-start', }}>
                        <View style={{ backgroundColor: '#8B03FF', borderRadius: 4 }}>
                            <Text style={{ fontSize: 12, fontWeight: '600', padding: 6, color: '#FFFFFF' }}>참여요청</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '800', marginTop: 12 }}>대파가필요해 님이 내 구매에 참여하고 싶어해요.</Text>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>[대파] 한 줄기씩 나눠가져요.</Text>
                    <Text style={{ fontSize: 14, color: '#616161', marginTop: 5 }}>방금 </Text>
                </View>

                <View style={[styles.notiContainer, { backgroundColor: '#EBFFDB' }]}>
                    <View style={{ alignItems: 'flex-start', }}>
                        <View style={{ backgroundColor: '#64DB00', borderRadius: 4 }}>
                            <Text style={{ fontSize: 12, fontWeight: '600', padding: 6 }}>댓글알림</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '800', marginTop: 12 }}>야채가게사장 님이 내 구매글에 댓글을 남겼어요.</Text>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>[대파] 한 줄기씩 나눠가져요.</Text>
                    <Text style={{ fontSize: 14, color: '#616161', marginTop: 5 }}>10시간 전</Text>
                </View>

                <View style={[styles.notiContainer]}>
                    <View style={{ alignItems: 'flex-start', }}>
                        <View style={{ backgroundColor: '#C4D8DA', borderRadius: 4 }}>
                            <Text style={{ fontSize: 12, fontWeight: '600', padding: 6}}>구매확정</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '800', marginTop: 12 }}>바나나요정 님이 요청한 공동구매가 확정되었어요.</Text>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>[바질] 파스타 맛나게 먹어요</Text>
                    <Text style={{ fontSize: 14, color: '#616161', marginTop: 5 }}>3시간 전</Text>
                </View>

                <View style={[styles.notiContainer]}>
                    <View style={{ alignItems: 'flex-start', }}>
                        <View style={{ backgroundColor: '#F7C9C9', borderRadius: 4 }}>
                            <Text style={{ fontSize: 12, fontWeight: '600', padding: 6 }}>구매거절</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '800', marginTop: 12 }}>아쉽게도 공동구매에 참여하지 못하게 되었어요.</Text>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>[토마토] 토마토 1kg 나눠사요.</Text>
                    <Text style={{ fontSize: 14, color: '#616161', marginTop: 5 }}>6시간 전</Text>
                </View>

                <View style={[styles.notiContainer]}>
                    <View style={{ alignItems: 'flex-start', }}>
                        <View style={{ backgroundColor: '#E9E9E9', borderRadius: 4 }}>
                            <Text style={{ fontSize: 12, fontWeight: '600', padding: 6 }}>참여요청</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '800', marginTop: 12 }}>구매는 마음에 드셨나요? 후기를 공유해주세요.</Text>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>[양파] 양파쿵야들 모여라..</Text>
                    <Text style={{ fontSize: 14, color: '#616161', marginTop: 5 }}>어제</Text>
                </View>

                <View style={[styles.notiContainer]}>
                    <View style={{ alignItems: 'flex-start', }}>
                        <View style={{ backgroundColor: '#C4D8DA', borderRadius: 4 }}>
                            <Text style={{ fontSize: 12, fontWeight: '600', padding: 6}}>구매확정</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '800', marginTop: 12 }}>오즈의맙소사 님이 요청한 공동구매가 확정되었어요.</Text>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>[양파] 양파쿵야들 모여라..</Text>
                    <Text style={{ fontSize: 14, color: '#616161', marginTop: 5 }}>3일 전</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notify

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    topContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE'
    },
    headerText: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
    },

    notiContainer: {
        height: 136,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE'
    }
})