import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Switch, TouchableOpacity, View, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

LocaleConfig.locales['kr'] = {
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    today: '오늘'
};
LocaleConfig.defaultLocale = 'kr';

const PostWrite = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const selectedItem = route.params?.selectedItem;
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOptionText, setSelectedOptionText] = useState('방식을 선택해주세요');
    const [modalDateVisible, setModalDateVisible] = useState(false);
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const [selectedDates, setSelectedDates] = useState({});
    const [isToggleEnabled, setIsToggleEnabled] = useState(false);
    const [selectedDateOptionText, setSelectedDateOptionText] = useState('날짜를 선택해주세요');
    const [toggleColor, setToggleColor] = useState(false);

    const today = new Date().toISOString().split('T')[0];

    const selectCheckbox = (key) => {
        setSelectedCheckbox(key === selectedCheckbox ? null : key);
    };
    const getSelectedOptionText = () => {
        switch (selectedCheckbox) {
            case 'option1':
                return '함께 쇼핑부터 할래요';
            case 'option2':
                return '내가 먼저 사고 현장에서 나눠줄래요';
            case 'option3':
                return '내가 먼저 사고 공용 냉장고에 보관할래요';
            case 'option4':
                return '참여자와 조율할래요';
            default:
                return '방식을 선택해주세요';
        }
    };

    const handleSelectDates = (day) => {
        if (!selectedDates.start) {
            setSelectedDates({ start: day.dateString, end: day.dateString });
        } else {
            if (day.dateString < selectedDates.start) {
                setSelectedDates({ start: day.dateString, end: selectedDates.end });
            } else {
                setSelectedDates({ start: selectedDates.start, end: day.dateString });
            }
        }
    };
    const getMarkedDates = () => {
        let markedDates = {};
        let startDate = new Date(selectedDates.start);
        let endDate = new Date(selectedDates.end);

        for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
            let key = d.toISOString().split('T')[0];
            if (key === selectedDates.start || key === selectedDates.end) {
                markedDates[key] = {
                    startingDay: key === selectedDates.start,
                    endingDay: key === selectedDates.end,
                    color: toggleColor ? '#EEEEEE' : '#A1FF51'
                };
            } else {
                markedDates[key] = { color: toggleColor ? '#EEEEEE' : '#CBFFA0' };
            }
        }

        markedDates[today] = { ...markedDates[today], fontColor: '#132A00', fontWeight: '900' };

        return markedDates;
    };
    const getSelectedDatesText = () => {
        if (isToggleEnabled) {
            return '일정은 조율이 가능해요';
        } else if (selectedDates.start && selectedDates.end) {
            return `${selectedDates.start} ~ ${selectedDates.end}`;
        }
        return '날짜를 선택해주세요';
    };
    const toggleSwitch = () => setIsToggleEnabled(previousState => !previousState);

    const savePostToDB = async () => {
        console.log('Sending data to server...');
        try {
            const response = await axios.post('http://172.30.1.39:3000/copurchase-post', {
                user_id: 1,
                title: title,
                product_id: product_id,
                address: address,
                address_postcode: address_postcode,
                address_sub: address_sub,
                date_start: selectedDates.start,
                date_end: selectedDates.end,
                date_val: isToggleEnabled ? 1 : 0,
                copurchase_method_id: selectedCopurchaseMethodId,
                content: JSON.stringify(content),
            });
            
            console.log('Data saved successfully:', response.data);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.headerText}>
                    <Text style={{ fontSize: 22, fontWeight: '900' }}>새 글쓰기</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                        navigation.goBack()
                    }
                >
                    <Feather name='x' size={24} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, color: '#808080' }}>임시저장</Text>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <View style={styles.bodyContainer}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.addImage}>
                        <Feather name='camera' size={24} />
                        <Text style={{ fontSize: 13, marginTop: 5 }}>사진 추가</Text>
                    </TouchableOpacity>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 18, alignItems: 'center' }}>
                            <Text style={styles.essentialCheck}>필수</Text>
                            <Text style={styles.midTitle}>공동구매 과채류 종류</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.inputContainer}
                            activeOpacity={0.8}
                            onPress={() => { navigation.push('SelectVege') }}>
                            <Text style={{ fontSize: 16, color: selectedItem ? 'black' : '#929292' }}>
                                {selectedItem ? selectedItem : '구매할 야채나 과일을 선택해주세요'}
                            </Text>
                            <Feather name='chevron-right' size={24} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 14, alignItems: 'center' }}>
                            <Text style={styles.essentialCheck}>필수</Text>
                            <Text style={styles.midTitle}>글 제목</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder='제목을 작성해주세요'
                                placeholderTextColor={'#929292'}
                                style={{
                                    fontSize: 16,
                                }}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 14, alignItems: 'center' }}>
                            <Text style={styles.essentialCheck}>필수</Text>
                            <Text style={styles.midTitle}>공동구매 방식</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.inputContainer}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ fontSize: 16, color: selectedOptionText === '방식을 선택해주세요' ? '#929292' : 'black' }}>
                                {selectedOptionText}
                            </Text>
                            <Feather name="chevron-down" size={24} />
                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(false)}
                        >
                            <View style={styles.modalBackContainer}>
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalTitleText}>
                                        <Text style={{ color: '#132A00', fontSize: 22, fontWeight: '900' }}>공동구매 방식</Text>
                                    </View>

                                    <View style={styles.modalContentContainer}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => selectCheckbox('option1')}
                                        >
                                            <Ionicons name='checkbox' size={24} color={selectedCheckbox === 'option1' ? '#52B400' : '#BABABA'} />
                                        </TouchableOpacity>
                                        <View style={styles.modalContentTextContainer}>
                                            <Text style={{ color: '#1D1B20', fontSize: 16, fontWeight: '900' }}>함께 쇼핑부터 할래요</Text>
                                            <Text style={{ color: '#49454F', fontSize: 14, marginTop: 4 }}>공동구매에 참여하는 인원들과 쇼핑부터 함께하고 싶다면 선택해주세요!</Text>
                                        </View>
                                    </View>
                                    <View style={styles.modalContentContainer}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => selectCheckbox('option2')}
                                        >
                                            <Ionicons name='checkbox' size={24} color={selectedCheckbox === 'option2' ? '#52B400' : '#BABABA'} />
                                        </TouchableOpacity>
                                        <View style={styles.modalContentTextContainer}>
                                            <Text style={{ color: '#1D1B20', fontSize: 16, fontWeight: '900' }}>내가 먼저 사고 현장에서 나눠줄래요</Text>
                                            <Text style={{ color: '#49454F', fontSize: 14, marginTop: 4 }}>주최자가 구매한 다음, 참여자들에게 공동 구매 위치에서 나눠주고 싶다면 선택해주세요</Text>
                                        </View>
                                    </View>
                                    <View style={styles.modalContentContainer}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => selectCheckbox('option3')}
                                        >
                                            <Ionicons name='checkbox' size={24} color={selectedCheckbox === 'option3' ? '#52B400' : '#BABABA'} />
                                        </TouchableOpacity>
                                        <View style={styles.modalContentTextContainer}>
                                            <Text style={{ color: '#1D1B20', fontSize: 16, fontWeight: '900' }}>내가 먼저 사고 공용 냉장고에 보관할래요</Text>
                                            <Text style={{ color: '#49454F', fontSize: 14, marginTop: 4 }}>주최자가 구매한 다음, 공용냉장고에 보관하고 싶다면 선택해주세요. (공용냉장고 위치 확인 필수)</Text>
                                        </View>
                                    </View>
                                    <View style={styles.modalContentContainer}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => selectCheckbox('option4')}
                                        >
                                            <Ionicons name='checkbox' size={24} color={selectedCheckbox === 'option4' ? '#52B400' : '#BABABA'} ㅋ />
                                        </TouchableOpacity>
                                        <View style={styles.modalContentTextContainer}>
                                            <Text style={{ color: '#1D1B20', fontSize: 16, fontWeight: '900' }}>참여자와 조율할래요</Text>
                                            <Text style={{ color: '#49454F', fontSize: 14, marginTop: 4 }}>댓글을 통해 참여자들끼리 공동구매 방식을 조율하고 싶다면 선택해주세요.</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={styles.selectButton}
                                        onPress={() => {
                                            setSelectedOptionText(getSelectedOptionText());
                                            setModalVisible(false)
                                        }}
                                    >
                                        <Text style={{ fontSize: 18, fontWeight: '900', textAlign: 'center' }}>방식 정하기</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                        <Text style={{ fontSize: 12, color: '#929292', marginTop: 4, marginLeft: 10 }}>원하시는 방식을 선택해주세요.</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 14, alignItems: 'center' }}>
                            <Text style={styles.essentialCheck}>필수</Text>
                            <Text style={styles.midTitle}>공동구매 위치</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={{ fontSize: 16, color: '#929292' }}>위치를 선택해주세요</Text>
                            <Feather name='search' size={22} />
                        </View>
                        <Text style={{ fontSize: 12, color: '#929292', marginTop: 4, marginLeft: 10 }}>공동구매가 진행되기 전까지는 행정동까지만 노출됩니다.</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 14, alignItems: 'center' }}>
                            <Text style={styles.essentialCheck}>필수</Text>
                            <Text style={styles.midTitle}>공동구매 날짜	</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.inputContainer}
                            onPress={() => setModalDateVisible(true)}
                        >
                            <Text style={{ fontSize: 16, color: selectedDates.start ? 'black' : '#929292' }}>
                                {getSelectedDatesText()}
                            </Text>
                            <Feather name='calendar' size={22} />
                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalDateVisible}
                            onRequestClose={() => setModalDateVisible(false)}
                        >
                            <View style={styles.modalBackContainer}>
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalTitleText}>
                                        <Text style={{ color: '#132A00', fontSize: 22, fontWeight: '900' }}>공동구매 날짜</Text>
                                    </View>
                                    <View style={{ width: '100%' }}>
                                        <Calendar
                                            style={{
                                                width: '100%'
                                            }}
                                            theme={{
                                                arrowColor: '#49454F',
                                                textSectionTitleColor: '#1D1B20',
                                                datTextColor: '#1D1B20'
                                            }}
                                            markingType='period'
                                            onDayPress={(day) => handleSelectDates(day)}
                                            markedDates={getMarkedDates()}
                                        />
                                    </View>
                                    <View style={styles.toggleContainer}>
                                        <Text style={{ color: '#1F1F1F', fontSize: 16 }}>일정은 조율이 가능해요</Text>
                                        <Switch
                                            trackColor={{ false: "#575757", true: "#64DB00" }}
                                            thumbColor={isToggleEnabled ? "#FFFFFF" : "#FFFFFF"}
                                            onValueChange={toggleSwitch}
                                            value={isToggleEnabled}
                                        />
                                    </View>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={styles.selectButton}
                                        onPress={() => {
                                            setModalDateVisible(false);
                                            setSelectedDateOptionText(getSelectedDatesText());
                                        }}
                                    >
                                        <Text style={{ fontSize: 18, fontWeight: '900', textAlign: 'center' }}>날짜 정하기</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 14, alignItems: 'center' }}>
                            <Text style={styles.essentialCheck}>선택</Text>
                            <Text style={styles.midTitle}>글 내용</Text>
                        </View>
                        <View style={styles.inputContentContainer}>
                            <TextInput
                                placeholder='내용을 작성해주세요'
                                placeholderTextColor={'#929292'}
                                multiline={true}
                                style={{
                                    flex: 1,
                                    textAlignVertical: 'top',
                                    fontSize: 16,
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.postButton}
                    onPress={() => savePostToDB()}
                >
                    <Text style={{ fontSize: 18, fontWeight: '900', textAlign: 'center' }}>글 올리기</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PostWrite

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
    addImage: {
        width: 68,
        height: 68,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#EFEFEF',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    essentialCheck: {
        fontSize: 16,
        fontWeight: '900',
        color: '#255100',
    },
    midTitle: {
        fontSize: 16,
        marginLeft: 5,
    },
    inputContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        flexDirection: 'row',
        width: '100%',
        height: 48,
        backgroundColor: '#EEEEEE',
        marginTop: 12,
        borderRadius: 5,
    },
    inputContentContainer: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        flexDirection: 'row',
        width: '100%',
        height: 168,
        backgroundColor: '#EEEEEE',
        marginTop: 12,
        borderRadius: 5,
    },

    buttonContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 40,
    },
    postButton: {
        width: '90%',
        height: 56,
        backgroundColor: '#76FF03',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 16,
    },

    // Modal
    modalBackContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitleText: {
        width: '100%',
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        marginBottom: 12,
    },
    modalContentContainer: {
        flexDirection: 'row',
        marginVertical: 12,
        marginHorizontal: 20,
    },
    modalContentTextContainer: {
        marginLeft: 12,
    },
    selectButton: {
        width: '94%',
        height: 56,
        backgroundColor: '#76FF03',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 16,
        marginVertical: 12,
    },

    toggleContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 4,
    }
})