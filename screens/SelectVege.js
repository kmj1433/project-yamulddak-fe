import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'

const PostWrite = () => {
    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setInputValue(item);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.headerText}>
                    <Text style={{ fontSize: 22, fontWeight: '900' }}>과채류</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                >
                    <Feather name='x' size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.navigate('PostWrite', { selectedItem }) }}
                >
                    <Text style={{ fontSize: 18, color: '#808080' }}>선택</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <View style={styles.bodyContainer}>
                    <View style={styles.searchContainer}>
                        <Feather name='search' size={24} color={'#8A8A8E'} />
                        <TextInput
                            placeholder='공동구매 할 과채류 검색'
                            placeholderTextColor={'#929292'}
                            style={{
                                fontSize: 16,
                                textAlign: 'left',
                                flex: 1,
                                marginLeft: 12
                            }}
                            value={inputValue}
                            onChangeText={(text) => setInputValue(text)}
                        />
                        <Feather name='mic' size={24} color={'#8A8A8E'} />
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.vegeContainer}
                        onPressIn={() => handleItemClick('대파')}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: selectedItem === '대파' ? '#52B400' : 'black',
                            fontWeight: selectedItem === '대파' ? '900' : '500'
                        }}>
                            대파
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.vegeContainer}
                        onPressIn={() => handleItemClick('양파')}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: selectedItem === '양파' ? '#52B400' : 'black',
                            fontWeight: selectedItem === '양파' ? '900' : '500'
                        }}>
                            양파
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.vegeContainer}
                        onPressIn={() => handleItemClick('사과')}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: selectedItem === '사과' ? '#52B400' : 'black',
                            fontWeight: selectedItem === '사과' ? '900' : '500'
                        }}>
                            사과
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.vegeContainer}
                        onPressIn={() => handleItemClick('바질')}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: selectedItem === '바질' ? '#52B400' : 'black',
                            fontWeight: selectedItem === '바질' ? '900' : '500'
                        }}>
                            바질
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default PostWrite;

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
    headerText: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
    },

    bodyContainer: {
        paddingHorizontal: 16,
    },

    searchContainer: {
        width: '100%',
        height: 48,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#DCDCDC',
        marginVertical: 10,
    },

    vegeContainer: {
        width: '100%',
        height: 56,
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: 12,
    }
});
