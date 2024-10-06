import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

const Challenge = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.topContainer}>
                    <View style={styles.headerText}>
                        <Text style={{ fontSize: 22, fontWeight: '900' }}>챌린지</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() =>
                            navigation.goBack()
                        }
                    >
                        <Feather name='arrow-left' size={24} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <View style={{ padding: 16 }}>
                    <Text style={{ fontSize: 20, fontWeight: '900' }}>야물딱진 챌린지</Text>
                    <Text style={{ fontSize: 16, marginTop: 4 }}>챌린지에 성공하면 친환경 포인트가 2배!</Text>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() =>
                            navigation.push('ChallengeDetail')
                        }
                    >
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

                    <ImageBackground style={styles.challengeImage}
                        source={require('../assets/images/challenge5.jpg')}
                        imageStyle={{ borderRadius: 16 }}
                    >
                        <View style={styles.overlay} />
                        <Text style={styles.challengeImageText}>매끼 두 종류 이상{'\n'}채소 먹기</Text>
                    </ImageBackground>

                    <ImageBackground style={styles.challengeImage}
                        source={require('../assets/images/challenge6.jpg')}
                        imageStyle={{ borderRadius: 16 }}
                    >
                        <View style={styles.overlay} />
                        <Text style={styles.challengeImageText}>제철 식자재{'\n'}먹어보기</Text>
                    </ImageBackground>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Challenge

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },
    topContainer: {
        height: 56,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE'
    },
    headerText: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
    },

    challengeImage: {
        width: 176,
        height: 168,
        padding: 20,
        margin: 6,
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

})