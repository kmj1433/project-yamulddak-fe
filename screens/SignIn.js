import { Alert, View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/Firebase';
import { useSignUp } from '../context/SignUpProvider';

const SignIn = () => {
    const navigation = useNavigation();
    const { userInfo, setUserInfo } = useSignUp();

    // 포커스 상태 관리
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    // 비밀번호 상태 변수 선언 추가
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace('Bottom');
            }
        });

        return unsubscribe;
    }, []);

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, userInfo.email, password);
            console.log('user', userCredential.user);

            setUserInfo({
                ...userInfo,
                email: userInfo.email,
            });

            navigation.replace('Bottom');
        } catch (error) {
            console.log(error.message);
            Alert.alert(
                "로그인 도중에 문제가 발생했습니다. 😥",
                [{ text: "닫기" }],
                { cancelable: true }
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
                style={styles.topContainer}
            >
                <Feather name='arrow-left' size={24} />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: '900' }}>로그인</Text>

                <View style={{ marginTop: 30 }}>
                    <Text style={{ marginLeft: 5, fontSize: 14 }}>
                        이메일 <Text style={{ color: '#9B27FF' }}>*</Text>
                    </Text>
                    <View style={[styles.inputContainer, { borderColor: isEmailFocused ? '#9B27FF' : '#9DA1AD' }]}>
                        <TextInput
                            placeholder='email@email.com'
                            placeholderTextColor={'#929292'}
                            onFocus={() => setIsEmailFocused(true)}
                            onBlur={() => setIsEmailFocused(false)}
                            value={userInfo.email}
                            onChangeText={text => setUserInfo({ ...userInfo, email: text })}
                            style={{ flex: 1 }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 16 }}>
                    <Text style={{ marginLeft: 5, fontSize: 14 }}>
                        비밀번호 <Text style={{ color: '#9B27FF' }}>*</Text>
                    </Text>
                    <View style={[styles.inputContainer, { borderColor: isPasswordFocused ? '#9B27FF' : '#9DA1AD' }]}>
                        <TextInput
                            placeholder='********'
                            placeholderTextColor={'#929292'}
                            onFocus={() => setIsPasswordFocused(true)}
                            onBlur={() => setIsPasswordFocused(false)}
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry
                            style={{ flex: 1 }}
                        />
                    </View>
                </View>

                <View style={styles.nextContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handleSignIn}
                    >
                        <Text style={styles.nextText}>로그인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topContainer: {
        height: 56,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    inputContainer: {
        width: '90%',
        padding: 12,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#9DA1AD',
        borderRadius: 8,
        marginTop: 12,
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
});
