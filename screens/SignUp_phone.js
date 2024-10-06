import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const SignUp_2 = () => {
    const navigation = useNavigation();

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingHorizontal: 28 }}>
                <Text style={{ fontSize: 24, fontWeight: '900', marginTop: 56 }}>휴대폰 번호를 인증해주세요.</Text>
                <Text style={{ fontSize: 16, color: '#646464', marginTop: 12, lineHeight: 18 }}>야물딱은 휴대폰 번호로 가입해요. 번호는 안전하게{'\n'}보관되며, 어디에도 공개되지 않아요.</Text>
                <View style={[styles.phoneContainer, { borderColor: isFocused ? '#9B27FF' : '#9DA1AD' }]}>
                    <TextInput
                        placeholder='010-1234-5678'
                        placeholderTextColor={'#929292'}
                        onFocus={handleFocus}
                        hitSlop={10}
                        style={{
                            flex: 1
                        }}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.messageContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            hitSlop={10}
                            onPress={() => {
                                navigation.push('SignUp_3');
                            }}
                        >
                            <Text style={styles.messageText}>인증문자 받기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SignUp_2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    phoneContainer: {
        width: '100%',
        padding: 12,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#9DA1AD',
        borderRadius: 12,
        marginTop: 12,
    },

    messageContainer: {
        width: '100%',
        backgroundColor: '#9B27FF',
        padding: 16,
        borderRadius: 8,
        marginTop: 24,
    },
    messageText: {
        fontSize: 18,
        fontWeight: '900',
        color: '#FFFFFF',
        textAlign: 'center'
    }
})