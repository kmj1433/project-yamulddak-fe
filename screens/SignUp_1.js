import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Start = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center', marginTop: 236 }}>
                <Image style={styles.startImage} source={require('../assets/images/logo-text-purple.png')} />
                <Text style={{ fontSize: 24, fontWeight: '900', marginTop: 16 }}>야채와 과일을 물리지 않게 딱!</Text>
                <Text style={{ fontSize: 16, color: '#464646', marginTop: 16, textAlign: 'center' }}>내 동네를 설정하고{'\n'}야물딱을 시작해보세요.</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 236 }}>
                <View style={styles.startContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        hitSlop={10}
                        onPress={() => {
                            navigation.push('SignUp_2');
                        }
                        }
                    >
                        <Text style={styles.startText}>시작하기</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 14, color: '#646464', marginRight: 8 }}>이미 계정이 있나요?</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        hitSlop={5}
                        onPress={() =>
                            navigation.push('SignIn')
                        }
                    >
                        <Text style={{ fontSize: 14, fontWeight: '900', color: '#9B27FF', }}>로그인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default Start

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    startImage: {
        width: 160,
        height: 70,
    },

    startContainer: {
        width: '80%',
        backgroundColor: '#A1FF51',
        padding: 16,
        borderRadius: 8,
    },
    startText: {
        fontSize: 18,
        fontWeight: '900',
        color: '#9B27FF',
        textAlign: 'center'
    }
})